import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    url = 'http://assignment.bunq.com';

    constructor(private http: Http) {
    }


    // Get all users
    getAllUsers() {
        return this.http.get(this.url + '/users')
                        .map(res => res.json());
    }

    // Get a single user by id
    getUser(userId) {
        return this.http.get(this.url + '/user/' + userId)
        .map(res => res.json(),
        err => console.log(err));
    }

    // Poll all new messages after lastMessageId
    getNewMessages(conversationId, messageId) {
        return this.http.get(this.url + '/conversation/' + conversationId + '/new/' + messageId)
        .map(res => res.json());
    }

    // Get a limited amount of messages
    getMessages(conversationId, limit, offset) {
        return this.http.get(this.url + '/conversation/' + conversationId + '/message/limited?limit=' + limit + '&offset=' + offset)
        .map(res => res.json());
    }

    // Get the last seen timestamp for the given user
    getTimestampForUser(conversationId, userId) {
        return this.http.get(this.url + '/conversation/' + conversationId + '/lastseen/' + userId)
        .map(res => res.json());
    }

    // Get the conversation details for one conversation
    getConversationDetails(conversationId) {
        return this.http.get(this.url + '/conversation/' + conversationId)
        .map(res => res.json());
    }

    // Get all conversations for one user.
    getConversationsForUser(userId) {
        return this.http.get(this.url + '/conversation/user/' + userId)
        .map(res => res.json());
    }

    // Send a message
    sendMessage(conversationId, data) {
        return this.http.post(this.url + '/conversation/' + conversationId + '/message/send', data)
        .map(res => res.json());
    }

    // Create a new personal conversation
    createConversation(data) {
        return this.http.post(this.url + '/conversation/personal', data)
        .map(res => res.json());
    }

    // Create a new group conversation
    createGroupConversation(data) {
        return this.http.post(this.url + '/conversation/group', data)
        .map(res => res.json());
    }

    // Update the last seen timestamp for the given user
    updateTimestamp(conversationId, userId) {
        return this.http.put(this.url + '/conversation/' + conversationId + '/seen/' + userId, '')
        .map(res => res.json());
    }

}
