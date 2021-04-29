// import simpleRestProvider from 'ra-data-simple-rest';
import jsonServerProvider from 'ra-data-json-server';
import { fetchUtils} from 'react-admin';


const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    var auth =   localStorage.getItem('auth');
    if(auth == null)
        return Promise.reject();
    const { jwtToken } = JSON.parse(localStorage.getItem('auth'));
    options.headers.set('Authorization', `Bearer ${jwtToken}`);
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider('http://fac130l.princeton.edu:8080', httpClient);
//const dataProvider = jsonServerProvider('http://localhost:8080', httpClient);

// const dataProvider = simpleRestProvider('http://path.to.my.api/');

const myDataProvider = {
    ...dataProvider,
    create: (resource, params) => {
        if (resource !== 'project-requests' || !params.data.files) {
            // fallback to the default implementation
            return dataProvider.create(resource, params);
        }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.files.filter(
            p => p.rawFile instanceof File
        );
        // const formerPictures = params.data.pictures.filter(
        //     p => !(p.rawFile instanceof File)
        // );

        return Promise.all(newPictures.map(convertFileToBase64))
            // .then(base64Pictures =>
            //     base64Pictures.map(picture64 => ({
            //         src: picture64,
            //         title: `${params.data.title}`,
            //     }))
            // )
            .then(transformedNewPictures =>
                dataProvider.create(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        files: [
                            ...transformedNewPictures,
                            
                        ],
                    },
                })
            );
    },
    update: (resource, params) => {
        if (resource !== 'project-requests' || !params.data.files) {
            // fallback to the default implementation
            return dataProvider.update(resource, params);
        }
        /**
         * For posts update only, convert uploaded image in base 64 and attach it to
         * the `picture` sent property, with `src` and `title` attributes.
         */
        
        // Freshly dropped pictures are File objects and must be converted to base64 strings
        const newPictures = params.data.files.filter(
            p => p.rawFile instanceof File
        );
        const formerPictures = params.data.files.filter(
            p => !(p.rawFile instanceof File)
        );

        return Promise.all(newPictures.map(convertFileToBase64))
            // .then(base64Pictures =>
            //     base64Pictures.map(picture64 => ({
            //         src: picture64,
            //         title: `${params.data.title}`,
            //     }))
            // )
            .then(transformedNewPictures =>
                dataProvider.update(resource, {
                    ...params,
                    data: {
                        ...params.data,
                        files: [
                            ...transformedNewPictures,
                            ...formerPictures,
                        ],
                    },
                })
            );
    },
};

/**
 * Convert a `File` object returned by the upload input into a base 64 string.
 * That's not the most optimized way to store images in production, but it's
 * enough to illustrate the idea of data provider decoration.
 */
const convertFileToBase64 = file =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;

        reader.readAsDataURL(file.rawFile);
    });

export default myDataProvider;