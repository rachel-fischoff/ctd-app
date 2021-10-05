import React, { createContext, useEffect, useState } from 'react';
import { db } from '../lib/firebase';

export const PlantContext = createContext();

const PlantContextProvider = (props) => {

    return (<PlantContext.Provider value = {{}}>{props.children}</PlantContext.Provider>)

}
export default PlantContextProvider;