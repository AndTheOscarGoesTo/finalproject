import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SocialLayout(props) {
    console.log(props.social);
    return (
        <Table bordered condensed hover>
        <thead>
            <tr>
                <th>Social Media</th>
                <th>Handles</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Twitter</td>
                <td>{ props.social.twitter }</td>
            </tr>
            <tr>
                <td>Instagram</td>
                <td>{ props.social.instagram }</td>
            </tr>
            <tr>
                <td>Twitch</td>
                <td>{ props.social.twitch }</td>
            </tr>
            <tr>
                <td>Youtube</td>
                <td>{ props.social.youtube }</td>
            </tr>
        </tbody>
        <Link to={ `/edit/${ props.currentUserId }` }><button>update</button></Link>
    </Table>
    );
}

export default SocialLayout;