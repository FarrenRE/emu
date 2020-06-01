import React, {useContext} from 'react';
import ThemeContext from '../ThemeContext'
import Editable from '../Editable';

export default function ProgramTable(props) {
  const theme = useContext( ThemeContext )
  return (
    <table className="emu_table" width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
      <tbody>
        <tr>
          <td className="em_width" width={20}>&nbsp;</td>
          <td>
            <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
              <tbody>
                <tr>
                  <td style={{fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: 'rgb(73, 73, 73)'}} align="left">
                    <table width="100%" cellSpacing={0} cellPadding={0} border={0} align="center">
                      <tbody><tr>
                          <th style={{fontWeight: 'bold'}}>Day&nbsp;1&nbsp;&nbsp;&nbsp;</th>
                          <th style={{fontWeight: 'bold'}}>Managing a Black Swan Event Using Data</th>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <strong><a href="#" style={{color: '#c00', textDecoration: 'underline'}}>Richard Hames</a></strong>, CEO of the Centre for the future and noted author.
                            <br />
                            <strong><a href="#" style={{color: '#c00', textDecoration: 'underline'}}>Ian Oppermann</a></strong>, Chief Data Scientist, Department of Customer Service, NSW Government on response to COVID-19.
                          </td>
                        </tr>
                        <tr>
                          <td className="em_height" style={{fontSize: '1px', lineHeight: '1px'}} colSpan={2} height={10} />
                        </tr>
                        <tr>
                          <th style={{fontWeight: 'bold'}}>Day&nbsp;2&nbsp;&nbsp;&nbsp;</th>
                          <th style={{fontWeight: 'bold'}}>From Data to Strategy</th>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <strong><a href="#" style={{color: '#c00', textDecoration: 'underline'}}>Mark Ritson</a></strong>, marketing columnist, brand consultant and former marketing professor.
                          </td>
                        </tr>
                        <tr>
                          <td className="em_height" style={{fontSize: '1px', lineHeight: '1px'}} colSpan={2} height={10} />
                        </tr>
                        <tr>
                          <th style={{fontWeight: 'bold'}}>Day&nbsp;3&nbsp;&nbsp;&nbsp;</th>
                          <th style={{fontWeight: 'bold'}}>Managing a Black Swan Event Using Data</th>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <strong><a href="#" style={{color: '#c00', textDecoration: 'underline'}}>David McCandless</a></strong>, London-based data-journalist and leading information designer.
                          </td>
                        </tr>
                        <tr>
                          <td className="em_height" style={{fontSize: '1px', lineHeight: '1px'}} colSpan={2} height={10} />
                        </tr>
                        <tr>
                          <th style={{fontWeight: 'bold'}}>Day&nbsp;4&nbsp;&nbsp;&nbsp;</th>
                          <th style={{fontWeight: 'bold'}}>Preparing for an AI / Automation Future</th>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>
                            <strong><a href="#" style={{color: '#c00', textDecoration: 'underline'}}>Dr. Jordan Nguyen</a></strong>, one of Australia's most innovative biomedical engineers and inventor.
                          </td>
                        </tr>
                        <tr>
                          <td className="em_height" style={{fontSize: '1px', lineHeight: '1px'}} colSpan={2} height={10} />
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="em_height" style={{fontSize: '1px', lineHeight: '1px'}} height={20} />
                </tr>
              </tbody>
            </table>
          </td>
          <td className="em_width" width={20}>&nbsp;</td>
        </tr>
      </tbody>
    </table>
  );
}
