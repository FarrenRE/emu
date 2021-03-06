import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'

import Editable from '../Editable';

export default function Text2(props) {
  const theme = useContext(ThemeContext)
  return (
    <table className="emu_text-2" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td className="em_width" width={20}>&nbsp;</td>
          <td valign="top">
            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <tr>
                  <td valign="top">
                    <table className="em_wrapper" align="left" border={0} cellPadding={0} cellSpacing={0} width={270}>
                      <tbody>
                        <tr>
                          <td valign="top">
                            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                              <tbody>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}>Cras nec eleifend turpis</Editable></td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={7} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}>Sed venenatis, orci et sollicitudin pellentesque, arcu metus cursus ex, eget vulputate turpis purus et neque. Integer tempus commodo tellus, id elementum nulla feugiat vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula porta auctor. Donec faucibus dolor tellus. </Editable></td>
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', textAlign: 'left' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}><a href={`${theme.org.website}${props.utms}&content=Content`} name={`Content_${props.id}_CTA`} style={{ textDecoration: 'none', color: theme.campaign.colors.link }} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></Editable></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="em_wrapper" align="right" border={0} cellPadding={0} cellSpacing={0} width={270}>
                      <tbody>
                        <tr>
                          <td className="em_pad_top" valign="top">
                            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                              <tbody>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}>Sed vel nisl diam</Editable></td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={7} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}>Aliquam eu nunc condimentum mauris porta luctus. Nam faucibus tempus odio, a sagittis tortor ullamcorper in. Nunc hendrerit volutpat dictum. Maecenas sem neque, scelerisque vitae hendrerit quis, commodo id risus. Aenean finibus augue ex, at placerat risus bibendum quis. </Editable></td>
                                </tr>
                                <tr>
                                  <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#df1a23', textAlign: 'left' }}><Editable setActiveEdit={props.setActiveEdit} activeID={props.activeID}><a href={`${theme.org.website}${props.utms}&content=Content`} name={`Content_${props.id + 1}_CTA`} style={{ textDecoration: 'none', color: theme.campaign.colors.link }} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></Editable></td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td className="em_height" height={20} style={{ fontSize: '1px', lineHeight: '1px' }} />
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
