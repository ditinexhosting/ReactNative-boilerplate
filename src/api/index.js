import {handleResponse, API} from './core';

const Api = {
  createPdf: async data => {
    let response = null;
    try {
      response = await API.post('/createPdf.php', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (e) {
      response = e;
    }

    return handleResponse(response);
  },
};

export default Api;
