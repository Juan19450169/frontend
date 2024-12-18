import axios from './axios';

export const getPartsRequest = () =>axios.get('/parts');

export const getPartRequest = (id) => axios.get(`/parts/${id}`);


export const createPartsRequest = (parts) =>axios.post('/parts', parts,{
    headers:{
            'Content-Type':'multipart/form-data'
    }
});

export const deletePartsRequest = (id) =>axios.delete('/parts/'+id);

export const updatePartsRequest = (id,parts) =>axios.put('/parts/'+id, parts,{
    headers: {
        "Content-Type": "multipart/form-data",
    }
})
