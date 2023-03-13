import sendRequest from './send-request';
const BASE_URL = '/api/tasks';

export function createTask(id)
{
    return sendRequest(BASE_URL, 'POST', id);
}