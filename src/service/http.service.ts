import axios, { AxiosRequestConfig } from 'axios'

/**
 * Base service for http requisitions
 */
export class HttpService {
    private static instance: HttpService = null

    /**
     * Get the current instance of the http service
     */
    public getInstance () {
        if (!HttpService.instance)
            HttpService.instance =  new HttpService

        return HttpService.instance
    }

    /**
     * Do a request using the GET method
     * @param url target url
     * @param params params to be passed as query string
     * @param options http options
     */
    get(url: string, params, options: AxiosRequestConfig) {
        return axios.get(url, {params, ...options})
    }

    /**
     * Do a request using the POST method
     * @param url target url
     * @param body data to be passed in body
     * @param options http options
     */
    post(url: string, body: any, options: AxiosRequestConfig) {
        return axios.post(url, body, options)
    }

    /**
     * Do a request using the POST method
     * @param url target url
     * @param body data to be passed in body
     * @param options http options
     */
    put(url: string, body: any, options: AxiosRequestConfig) {
        return axios.put(url, body, options)
    }

    /**
     * Do a request using the POST method
     * @param url target url
     * @param body data to be passed in body
     * @param options http options
     */
    patch(url: string, body: any, options: AxiosRequestConfig) {
        return axios.patch(url, body, options)
    }

    /**
     * Do a request using the POST method
     * @param url target url
     * @param body data to be passed in body
     * @param options http options
     */
    delete(url: string, options: AxiosRequestConfig) {
        return axios.delete(url, options)
    }   
}