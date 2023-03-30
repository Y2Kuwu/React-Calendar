import sendRequest from './send-request';
const BASE_URL = '/api/tasks';

export async function createTask(create)
{
    return sendRequest(BASE_URL, 'POST', create);
}

export async function getOneDay(thisDate)
{
    return sendRequest(`${BASE_URL}/taskName`, 'POST', thisDate);
    
}



// export async function getOneDay(month, day ,year)
// {
//     return sendRequest(`${BASE_URL}/${month}/${day}/${year}`);
    
// }