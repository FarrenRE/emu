import React from 'react';
import Editable from './../Editable';
import EditableImage from './../EditableImage';

class ContentLeft extends React.Component {
  render() {
    return (
      <table className="emu_content-left" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          <tr>
            <td className="em_width" width="20">&nbsp;</td>
            <td>
              <table className="em_wrapper" align="left" border={0} cellPadding={0} cellSpacing={0} width={270}>
                <tbody>
                  <tr>
                    <td align="center" valign="top"><EditableImage setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} alt="content" border={0} height={190} src="https://via.placeholder.com/270x190.jpg" style={{ display: 'block' }} width={270} /></td>
                  </tr>
                </tbody>
              </table>
              <table className="em_wrapper" align="right" border={0} cellPadding={0} cellSpacing={0} width={270}>
                <tbody>
                  <tr>
                    <td valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td className="em_pad_top" style={{ textAlign: 'left', color: '#000000', lineHeight: '22px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Nulla sed odio ipsum.</Editable></td>
                          </tr>
                          <tr>
                            <td height={2} style={{ lineHeight: '1px', fontSize: '1px' }} />
                          </tr>
                          <tr>
                            <td style={{ textAlign: 'left', color: '#000000', lineHeight: '21px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}>Mauris at sem et nunc aliquam vehicula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Editable></td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: 'left', color: '#CC0000', lineHeight: '21px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px' }}><Editable setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID}><a href={this.props.theme.org.website + this.props.utms + '&utm_content=contentLeftLink'} name={`Content_${this.props.id}_Link`} style={{ textDecoration: 'none', color: `${this.props.theme.campaign.colors.link}` }} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Read more&nbsp;»</a></Editable></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="em_width" width="20">&nbsp;</td>
          </tr>
          <tr>
            <td className="em_height" bgcolor="#FFFFFF" height={20} style={{ fontSize: '1px', lineHeight: '1px' }}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default ContentLeft;
