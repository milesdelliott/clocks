const randomProperty : (object :  Record<string, unknown>)  => unknown = ( object ) => {
    const keys = Object.keys(object);
    const index = Math.floor(keys.length * Math.random());
    return object[keys[ index ]];
};

export default randomProperty