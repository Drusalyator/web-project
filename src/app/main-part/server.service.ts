import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class ServerService {
    headersToSend: HttpHeaders;
    constructor(private http: HttpClient) {
        this.headersToSend = new HttpHeaders(
            {'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'});
    }

    storePaymentsByCard(data) {
        return this.http.post('http://localhost:4500/storeCardPayments', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }

    storePaymentsRequest(data) {
        return this.http.post('http://localhost:4500/storePaymentsRequests', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }

    getPaymentsToDownload(data) {
        return this.http.post('http://localhost:4500/getPaymentsToDownload', data,
            {observe: 'response', responseType: 'text', headers: this.headersToSend});
    }
}
