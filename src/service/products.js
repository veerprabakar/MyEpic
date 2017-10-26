

async function GetJSONData(link, component)
{
    let response = await fetch(link);
    let responseJson = await response.json();
    return responseJson;
}