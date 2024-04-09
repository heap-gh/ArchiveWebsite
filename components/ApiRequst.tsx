
import { requestProps, requestData } from "./Interfaces";


const apiRequest = async (URL: string = "", requestProps?: requestProps, data?: requestData): Promise<string> => {

    let status: string = "success";

    
    try {

        const response = await fetch(URL)

        if (!response.ok)
            throw new Error("Could not connect to Server");
        
        if (data)
            data.dataOut = await response.json();
    } catch (error: any) {
        status = error;
    }
    return new Promise((resolve, reject) => {
        resolve(status)
    })

}



export default apiRequest;