import sendRequest from './send-request';

const BASE_URL = '/api/days';  

// export async function getThisDay(day)
// {
//     return sendRequest(BASE_URL, 'POST', day);
// }

export function createDate(day)
{
    return sendRequest(BASE_URL, 'POST', day);
}

// export function getThisDay(day)
// {
//     return sendRequest(BASE_URL, day)
// }

// export async function createTask(task)
// {
//     return sendRequest(BASE_URL, 'POST', task);
// }
