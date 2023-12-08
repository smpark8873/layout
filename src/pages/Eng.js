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
                    <td>black</td>
                    <td>blue</td>
                    <td>yello</td>
                    <td>red</td>
                    <td>white</td>
                    <td>orange</td>
                    <td>gray</td>
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
            </tbody>
        </table>
            
    </View>
  )
}

