import React from 'react'
import styled from 'styled-components'

const View = styled.div`
     margin: 0 auto;
     padding: 100px 0;
     width: 1000px;
     font-size: 12px;
     table {
        border-collapse: collapse;
        th{
            padding: 5px;
            height: 20px;
            border: 1px solid #ddd;
            text-align: center;          
        }
        td{
            padding: 5px;
            height: 20px;
            border: 1px solid #ddd;
            text-align: center;              
        }
        
     }
`;

export default function Eng() {
  return (
    <View>
        <table>
            <thead>
                <tr>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>mother</td>
                    <td>father</td>
                    <td>son</td>
                    <td>daughter</td>
                    <td>husband</td>
                    <td>wife</td>
                    <td>sister</td>
                </tr>
                <tr>
                    <td>black</td>
                    <td>blue</td>
                    <td>yello</td>
                    <td>red</td>
                    <td>white</td>
                    <td>orange</td>
                    <td>gray</td>
                </tr>
                <tr>
                    <td>teacher</td>
                    <td>doctor</td>
                    <td>nurse</td>
                    <td>dentist</td>
                    <td>student</td>
                    <td>scientist</td>
                    <td>famous</td>
                </tr>
                <tr>
                    <td>hi/hello</td>
                    <td>morning</td>
                    <td>afternoon</td>
                    <td>eveing</td>
                    <td>tomorrow</td>
                    <td>week</td>
                    <td>every day</td>
                </tr>
                <tr>
                    <td>car</td>
                    <td>phone</td>
                    <td>computer</td>
                    <td>tv</td>
                    <td>wallet</td>
                    <td>chair</td>
                    <td>coat</td>                    
                </tr>
                <tr>
                    <td>This is</td>
                    <td>That is</td>
                    <td>I am</td>
                    <td>You are</td>
                    <td>not</td>
                    <td>I am OK! and you?</td>
                    <td>I am Good, thanks.</td>
                </tr>
                <tr>
                    <td>yes</td>
                    <td>no</td>
                    <td>play</td>
                    <td>cat</td>
                    <td>dog</td>
                    <td>big</td>
                    <td>small</td>
                </tr>
                <tr>
                    <td>smart</td>
                    <td>beautiful</td>
                    <td>like</td>
                    <td>favorite</td>
                    <td>video games</td>
                    <td>flew</td>
                    <td>fly</td>
                </tr>
                <tr>
                    <td>book</td>
                    <td>pen</td>
                    <td>cards</td>
                    <td>soccer</td>
                    <td>baseball</td>
                    <td>basketball</td>
                    <td>chess</td>
                </tr>
                <tr>
                    <td>new</td>
                </tr>
            </tbody>
        </table>
            
    </View>
  )
}

