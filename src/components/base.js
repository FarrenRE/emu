import React from 'react';

class Base extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <table align="center" bgcolor={ this.props.theme.colors.bgColor } border={0} cellPadding={0} cellSpacing={0} width="100%">
        {/* ==Header Starts Here==*/}
        <tbody>
          <tr>
            <td align="center" valign="top">
              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    {/* Left side*/}
                    <td className="em_hide" bgcolor="#f6f6f6" height={50} valign="top">
                      <table align="left" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td className="em_height" height={50}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {/* Center*/}
                    <td width={600}>
                      <table className="em_wrapper" align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} height={50} style={{tableLayout: 'fixed'}} width={600}>
                        <tbody>
                          <tr>
                            <td align="center" valign="top">
                              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td bgcolor="#FFFFFF"><span className="preheader" style={{color: this.props.theme.colors.bgColor, fontSize: '1px'}}>Preheader goes here.</span></td>
                                  </tr>
                                  <tr>
                                    <td style={{textAlign: 'center', color: 'rgb(153, 153, 153)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '11px'}} valign="middle">If you cannot see this email, please <a href="#SPCLICKTOVIEW" name="SPCLICKTOVIEW" style={{color: 'rgb(153, 153, 153)', textDecoration: 'underline'}} target="_blank" rel="noopener noreferrer" xt="SPCLICKTOVIEW">click to view it online</a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    {/* Right side*/}
                    <td className="em_hide" bgcolor="#f6f6f6" height={50} valign="top">
                      <table align="left" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td className="em_height" height={50}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* // header ends here==*/}
          {/* ==Body Starts Here==*/}
          <tr>
            <td align="center">
              <table className="em_wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width={600}>
                <tbody>
                  <tr>
                    <td className="em_hide" bgcolor="#ffffff" height={1} style={{lineHeight: '0px', fontSize: '0px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{width: '600px', display: 'block', minWidth: '600px'}} xt="SPIMAGE" /></td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        {/* banner image starts here*/}
                        <tbody>
                          <tr>
                            <td>
                              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" valign="top"><a href="https://www.adma.com.au/" name="logo_link" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img className="em_full_img" alt="ADMA" border={0} height={75} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/ADMA-logo-edm-wide.jpg" title="ADMA" width={400} xt="SPIMAGE" /></a></td>
                                    <td>
                                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                        <tbody>
                                          <tr>
                                            <td className="em_height" bgcolor="#ffffff" height={10} style={{lineHeight: '1px', fontSize: '1px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                                          </tr>
                                          <tr>
                                            <td style={{color: 'rgb(153, 153, 153)', lineHeight: '14px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '10px'}}>NEWSLETTER<br />APRIL 2019</td>
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
                            <td className="em_height" bgcolor="#ffffff" height={10} style={{lineHeight: '1px', fontSize: '1px', borderTopColor: 'rgb(182, 182, 182)', borderTopWidth: '1px', borderTopStyle: 'solid'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                          </tr>
                          {/* Full Content Section starts here*/}
                          <tr>
                            <td valign="top">
                              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td valign="top">
                                      {/* body*/}
                                      { this.props.children }
                                      {/* /body*/}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          {/* // Full Content section ends here*/}
                          <tr>
                            <td valign="top">
                              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td><img className="em_full_img" alt="ADMA Partners" src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/adma-partners.jpg" style={{display: 'block'}} title="ADMA Partners" xt="SPIMAGE" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          {/* // Thanks to our sponsors section ends here*/}
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* // Body Ends Here*/}
          {/* ===Footer Starts Here===*/}
          <tr>
            <td align="center" valign="top">
              <table align="center" bgcolor={ this.props.theme.colors.footer } border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td  height={106}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                    <td width={600}>
                      <table className="em_wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width={600}>
                        <tbody>
                          <tr>
                            <td className="em_hide" height={1} style={{lineHeight: '0px', fontSize: '0px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{width: '600px', display: 'block', minWidth: '600px'}} xt="SPIMAGE" /></td>
                          </tr>
                          <tr>
                            <td align="center" valign="top">
                              <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td className="em_height" height={26} style={{lineHeight: '1px', fontSize: '1px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                                  </tr>
                                  <tr>
                                    <td valign="top">
                                      <table className="em_tbl_312" align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                        <tbody>
                                          <tr>
                                            <td valign="top">
                                              <table className="em_wrapper" align="left" border={0} cellPadding={0} cellSpacing={0} width={450}>
                                                <tbody>
                                                  <tr>
                                                    <td className="em_white" style={{textAlign: 'left', color: 'rgb(255, 255, 255)', lineHeight: '13px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '10px'}}>AADL trading as ADMA. Level 6 50 Carrington Street, Sydney NSW 2000. ABN: 34 002 909 800. This email was sent to %%email%%. Click <a href="http://www.pages01.net/adma/ADMAPreference/unsubscribe.html/" name="www_pages01_net_adma_ADMAPrefe" style={{color: 'rgb(255, 255, 255)'}} xt="SPCLICK">here</a>	if you prefer not to receive emails from ADMA Australia. © Copyright 2019 ADMA Australia. All Rights Reserved.</td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                              <table className="em_wrapper" align="right" border={0} cellPadding={0} cellSpacing={0} width={97}>
                                                <tbody>
                                                  <tr>
                                                    <td className="em_pad_top" align="left" valign="top"><a href="https://www.adma.com.au/" name="_6" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="ADMA" border={0} height={25} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/AADL_ADMA_Logo_LockUp-NoTag_White4.png" style={{display: 'block'}} title="ADMA" width={110} xt="SPIMAGE" /></a></td>
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
                                    <td className="em_height" height={20} style={{lineHeight: '1px', fontSize: '1px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                                  </tr>
                                  <tr>
                                    <td align="left" valign="top">
                                      <table className="em_wrapper" align="left" border={0} cellPadding={0} cellSpacing={0} width={312}>
                                        <tbody>
                                          <tr>
                                            <td align="center" valign="top">
                                              <table align="center" border={0} cellPadding={0} cellSpacing={0} width={180}>
                                                <tbody>
                                                  <tr>
                                                    <td align="center" valign="top" width={47}><a href="http://www.facebook.com/adma.com.au" name="www_facebook_com_adma_com_au" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="facebook" border={0} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_facebook.jpg" style={{display: 'block'}} width={47} /></a></td>
                                                    <td className="em_width" width={13}>&nbsp;&nbsp;</td>
                                                    <td align="center" valign="top" width={47}><a href="http://www.twitter.com/adma" name="www_twitter_com_adma" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="twitter" border={0} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_twitter.jpg" style={{display: 'block'}} width={47} /></a></td>
                                                    <td className="em_width" width={13}>&nbsp;&nbsp;</td>
                                                    <td align="center" valign="top" width={47}><a href="https://www.youtube.com/channel/UCP8TUs7qz8wxAnNyLH3bfpQ" name="www_youtube_com_channel_UCP8TU" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="you tube" border={0} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_you_tube.jpg" style={{display: 'block'}} width={47} /></a></td>
                                                    <td className="em_width" width={13}>&nbsp;&nbsp;</td>
                                                    <td align="center" valign="top" width={47}><a href="https://www.linkedin.com/company/adma" name="www_linkedin_com_company_adma" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="linkedin" border={0} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_linkedin.jpg" style={{display: 'block'}} width={47} /></a></td>
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
                                    <td className="em_height" height={26} style={{lineHeight: '1px', fontSize: '1px'}}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td height={106}><img alt="" border={0} contentid="5ac949b4-16a23e21e10-c2a8af96738cc20073a7254c07aedd78" height={1} name="7325376_spacer.gif" spname="7325376_spacer.gif" src="7325376_spacer.gif" style={{display: 'block'}} width={1} xt="SPIMAGE" /></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* // Footer Ends Here*/}
          {/* Line Starts Here*/}
          <tr>
            <td align="center" bgcolor={ this.props.theme.colors.primary } height={3}>
              <table align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width="100%">
                <tbody>
                  <tr>
                    <td align="center" valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td height={3} style={{lineHeight: '0px', fontSize: '0px'}}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* // Line Ends Here*/}
          {/* Copy Rights Starts Here*/}
          <tr>
            <td align="center" bgcolor="#010101">
              <table className="em_wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width={600}>
                <tbody>
                  <tr>
                    <td className="em_hide" bgcolor="#010101" height={1} style={{lineHeight: '0px', fontSize: '0px'}}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td className="em_side" height={50} style={{textAlign: 'left', color: 'rgb(111, 111, 111)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '11px'}} valign="middle">© { this.props.theme.org.abbr } Australia. All rights reserved.</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* //Copy Rights Ends Here*/}
        </tbody>
      </table>
    );
  }
}

export default Base;