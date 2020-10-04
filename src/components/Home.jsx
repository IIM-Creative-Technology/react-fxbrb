import React, { Component } from 'react';
import '../App.css';
import { calendarData } from '../data';

class Home extends Component {
  render() {
    return (
        <div>
          {calendarData.map((datas, key) => {
              return (
                  <table>
                    <thead>
                      <td>Lundi</td>
                      <td>Mardi</td>
                      <td>Mercredi</td>
                      <td>Jeudi</td>
                      <td>Vendredi</td>
                    </thead>
                    <tbody>
                      <tr>
                      <td>
                        <div key={key} className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      </tr>
                      <tr>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      <td>
                        <div key={key}  className="calendar">
                          <h3>{datas.vcalendar[0].vevent[1].title}</h3>
                          <p>8h - 13h</p>
                          <p>{datas.vcalendar[0].vevent[1].location}</p>
                          <p>{datas.vcalendar[0].vevent[1].prof}</p>
                        </div>
                      </td>
                      </tr>
                      
                    </tbody>
                  </table>
              )
          })}
        </div>
    );
  }
}

export default Home;