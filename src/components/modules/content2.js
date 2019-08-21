import React from 'react';

class Content2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
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
                                  <td align="center" valign="top"><a href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Content` } name={ `Content_${ this.props.id }_IMAGE` } target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="content" border={0} height={190} src="https://via.placeholder.com/270x190.jpg" style={{display: 'block'}} width={270} /></a></td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={15} style={{fontSize: '1px', lineHeight: '1px'}} />
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none'}}>Cras nec eleifend turpis</td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={7} style={{fontSize: '1px', lineHeight: '1px'}} />
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left'}}>Nulla scelerisque sapien elit, vitae ultricies magna iaculis eu. Morbi interdum magna eu tortor scelerisque, quis dignissim urna egestas. Aliquam ac sollicitudin quam. Fusce erat elit, volutpat vitae lorem et, congue lacinia risus. </td>
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', textAlign: 'left'}}><a href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Content` } name={ `Content_${ this.props.id }_CTA` } style={{textDecoration: 'none', color: this.props.theme.colors.link}} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></td>
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
                                  <td align="center" valign="top"><a href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Content` } name={ `Content_${ this.props.id }_CTA` } target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="content" border={0} width={270} height={190} src="https://via.placeholder.com/270x190.jpg" style={{display: 'block'}} /></a></td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={15} style={{fontSize: '1px', lineHeight: '1px'}} />
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '18px', lineHeight: '22px', color: '#000000', textAlign: 'left', textDecoration: 'none'}}>Sed vel nisl diam</td>
                                </tr>
                                <tr>
                                  <td className="em_height" height={7} style={{fontSize: '1px', lineHeight: '1px'}} />
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#000000', textAlign: 'left'}}>Maecenas ornare, nisi at aliquam dictum, metus odio auctor nulla, vitae interdum augue nisl vitae sem.</td>
                                </tr>
                                <tr>
                                  <td style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '13px', lineHeight: '21px', color: '#df1a23', textAlign: 'left'}}><a href={ `${ this.props.theme.org.website }${ this.props.utms }&content=Content` } name={ `Content_${ this.props.id +1 }_CTA` } style={{textDecoration: 'none', color: this.props.theme.colors.link}} target="_blank" rel="noopener noreferrer" xt="SPCLICK">Find out more&nbsp;»</a></td>
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
                  <td className="em_height" height={20} style={{fontSize: '1px', lineHeight: '1px'}} />
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
