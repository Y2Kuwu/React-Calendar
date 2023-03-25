import sendRequest from './send-request';
const BASE_URL = '/api/tasks';

export async function createTask(create)
{
    return sendRequest(BASE_URL, 'POST', create);
}

export async function getOneDay(id)
{
    return sendRequest(`${BASE_URL}/${id}`);
    
}