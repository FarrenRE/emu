import React from 'react';
import Editable from './../Editable';
import EditableImage from './../EditableImage';

class Content2 extends React.Component {
  render() {
    return (
      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
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
                                    <td align="center" valign="top"><EditableImage setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} alt="content" border={0} height={190} src="https://via.placeholder.com/270x190.jpg" style={{ display: 'block' }} width={270} /></td>
                                  </tr>
                                  <tr>
                                    <td className="em_height" height={15} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Cras nec eleifend turpis</Editable></td>
                                  </tr>
                                  <tr>
                                    <td className="em_height" height={7} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Nulla scelerisque sapien elit, vitae ultricies magna iaculis eu. Morbi interdum magna eu tortor scelerisque, quis dignissim urna egestas. Aliquam ac sollicitudin quam. Fusce erat elit, volutpat vitae lorem et, congue lacinia risus.</Editable></td>
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', textAlign: 'left' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Content`} name={`Content_${this.props.id}_CTA`} style={{ textDecoration: 'none', color: this.props.theme.campaign.colors.link }} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></Editable></td>
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
                                    <td align="center" valign="top"><EditableImage setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} alt="content" border={0} height={190} src="https://via.placeholder.com/270x190.jpg" style={{ display: 'block' }} width={270} /></td>
                                  </tr>
                                  <tr>
                                    <td className="em_height" height={15} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Sed vel nisl diam</Editable></td>
                                  </tr>
                                  <tr>
                                    <td className="em_height" height={7} style={{ fontSize: '1px', lineHeight: '1px' }} />
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Maecenas ornare, nisi at aliquam dictum, metus odio auctor nulla, vitae interdum augue nisl vitae sem.</Editable></td>
                                  </tr>
                                  <tr>
                                    <td style={{ fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#df1a23', textAlign: 'left' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={`${this.props.theme.org.website}${this.props.utms}&content=Content`} name={`Content_${this.props.id + 1}_CTA`} style={{ textDecoration: 'none', color: this.props.theme.campaign.colors.link }} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></Editable></td>
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
}

export default Content2;
