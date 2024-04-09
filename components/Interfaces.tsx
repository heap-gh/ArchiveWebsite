
export interface users{
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
        "lat": string,
        "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}


export function instanceOfUsers(data: any): data is users {
    if (
        typeof data.id === 'number' &&
        typeof data.name === 'string' &&
        typeof data.username === 'string' &&
        typeof data.email === 'string' &&
        typeof data.phone === 'string' &&
        typeof data.website === 'string'
    ) {
        return true;
    } else {
        return false;
    }
}




export interface comments {
    
    "postId": number,
    "id": number,
    "name": string,
    "email": string,
    "body": string,
      
}


export function instanceOfComments(data: any): data is comments {
    if (typeof data.postId === "number" &&
        typeof data.name === "string" &&
        typeof data.email === "string" &&
        typeof data.body === "string"
    ){
        return true;
    } else {
        return false;
    }
}


export interface posts {
    "userId": number,
    "id": number,
    "title": string,
    "body": string
}


export function instanceOfPosts(data: any): data is posts {
    if (
        typeof data.userId === "number" &&
        typeof data.id === "number" &&
        typeof data.title === "string" &&
        typeof data.body === "string"
    ) {
        return true;
    } else {
        return false;
    }
}


export interface requestProps {
    method: string,
    headers: {
        "Content-Type": string,
    },
}

export interface requestData {
    dataOut?: any,
    dataIn?: any,
}