import React, {useContext} from 'react';
import ThemeContext from './../ThemeContext'

export default function DateBlock(props) {
  const theme = useContext(ThemeContext)
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0} className="emu_dataBlock" width="100%">
        <tbody>
          <tr>
            <td className="em_width" width={20}>&nbsp;</td>
            <td style={{fontFamily: theme.org.styles.fontFamily, fontSize: '14px', color: '#000000'}}>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td align="center">
                      <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} className="deviceWidth" width="100%">
                        <tbody>
                          <tr>
                            <td bgcolor="#ffffff" className="deviceWidth" style={{textAlign: 'left', verticalAlign: 'top'}} width="100%">
                              <table align="left" border={0} border-spacing={0} cellPadding={0} cellSpacing={0} className="date" width={75}>
                                <tbody>
                                  <tr>
                                    <td align="center" valign="middle" bgcolor={theme.campaign.colors.primary} height={75} style={{fontFamily: theme.org.styles.fontFamily, color: theme.campaign.colors.secondary, maxWidth: '75px', verticalAlign: 'middle'}} valign="middle" width={75}>
                                      <span style={{fontSize: '22px'}}>14</span><br />MAR
                                    </td>
                                    <td bgcolor="#ffffff" width={6}>&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table align="right" border={0} cellPadding={0} cellSpacing={0} className="dateheader" style={{lineHeight: '21px', display: 'block'}} width="82%">
                                <tbody>
                                  <tr style={{fontSize: '14px', fontWeight: 'normal'}}>
                                    <td style={{color: theme.campaign.colors.link, fontFamily: 'Arial, sans-serif', fontSize: '16px', fontWeight: 'bold', display: 'block'}} valign="top">Albert Einstein's Birthday</td>
                                  </tr>
                                  <tr>
                                    <td className="datestamp" style={{display: 'block', color: '#000000', fontSize: '13px', fontWeight: 'bold',fontFamily: theme.org.styles.fontFamily}}>Join us for one of science's greatest birthday bashes of all time</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                          <td className="em_height" height={10} style={{ fontSize: '1px', lineHeight: '1px' }} >&nbsp;</td>
                          </tr>
                          <tr>
                            <td style={{textAlign: 'left', verticalAlign: 'top', fontSize: '14px', fontFamily: theme.org.styles.fontFamily}} valign="top">Albert Einstein was a German-born theoretical physicist who developed the theory of relativity, one of the two pillars of modern physics. His work is also known for its influence on the philosophy of science and the modern discotek.&nbsp;<a href={`${theme.org.website}${props.utms}&content=DateBlock`} name="dateBlock link" style={{color: theme.campaign.colors.link}} target="_blank">Buy tickets now »</a></td>
                          </tr>
                          <tr>
                          <td className="em_height" height={10} style={{ fontSize: '1px', lineHeight: '1px' }} >&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="em_height" height={10} style={{ fontSize: '1px', lineHeight: '1px' }} >&nbsp;</td>
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
