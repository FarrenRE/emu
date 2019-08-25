import React from 'react';

import IQFooterLinks from './modules/iqFooterLinks';

class Base extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
          <meta content="telephone=no" name="format-detection"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <title>%%MAILING_ID%%</title>
          <style type="text/css" dangerouslySetInnerHTML={{__html: `
            \nbody{-webkit-text-size-adjust:100%!important;-ms-text-size-adjust:100%!important;-webkit-font-smoothing:antialiased!important;}
            \nimg{border:0!important;outline:none!important;}
            \ntable{border-collapse:collapse;mso-table-lspace:0;mso-table-rspace:0;}
            \ntd{border-collapse:collapse;mso-line-height-rule:exactly;}
            \na{color: ${ this.props.theme.colors.link }; }
            \na,span{mso-line-height-rule:exactly;}
            \n.ExternalClass *{line-height:100%;}
            \nspan.MsoHyperlink{mso-style-priority:99;color:inherit;}
            \nspan.MsoHyperlinkFollowed{mso-style-priority:99;color:inherit;}
            \n.em_white a{text-decoration:none!important;color:#ffffff!important;}
            \nspan.preheader \t{display: none !important; font-size: 1px; color: #363636;}

            \n@media only screen and (min-width:480px) and (max-width:600px){
              \ntable[class=em_wrapper]{width:100%!important;}
              \ntd[class=em_w250]{width:300px!important;}
              \nimg[class=em_full_img]{width:100%!important;height:auto!important;max-width:none!important;}
              \ntd[class=em_hide],table[class=em_hide],span[class=em_hide],br[class=em_hide]{display:none!important;}
              \ntd[class=em_width]{width:10px!important;}
              \ntd[class=em_txt]{font-size:20px!important;line-height:23px!important;}
              \ntd[class=em_pad_top]{padding-top:20px!important;}
              \ntd[class=em_height]{height:20px!important;}
              \ntd[class=em_height1]{height:10px!important;}
              \ntd[class=em_align_cent]{text-align:center!important;}
              \ntd[class=em_left]{text-align:left!important; font-size:24px!important; line-height:26px!important;}
              \ntd[class=em_align_cent1]{text-align:center!important;font-size:11px!important;line-height:14px!important;}
              \ntd[class=em_pad]{padding-left:10px!important;}
              \ntd[class=em_side]{padding-left:10px!important;padding-right:10px!important;}
              \ndiv[class=hide_disktop]{display:table!important;float:none!important;width:100%!important;overflow:visible!important;height:auto!important;}
              \ntable[class=em_tbl_312]{width:312px!important;}
              \n}

            \n@media only screen and (max-width:480px){
              \ntable[class=em_wrapper]{width:100%!important;}
              \ntd[class=em_w250]{width:250px!important;}
              \ntd[class=em_hide],table[class=em_hide],span[class=em_hide],br[class=em_hide]{display:none!important;}
              \ntd[class=em_txt]{font-size:20px!important;line-height:23px!important;}
              \nimg[class=em_full_img]{width:100%!important;height:auto!important;max-width:none!important;}
              \ntd[class=em_width]{width:10px!important;}
              \ntd[class=em_height]{height:20px!important;}
              \ntd[class=em_height1]{height:10px!important;}
              \ntd[class=em_pad_top]{padding-top:20px!important;}
              \ntd[class=em_align_cent]{text-align:center!important;}
              \ntd[class=em_left]{text-align:left!important; font-size:24px!important; line-height:26px!important;}
              \ntd[class=em_align_cent1]{text-align:center!important;font-size:11px!important;line-height:14px!important;}
              \ntd[class=em_pad]{padding-left:10px!important;}
              \ntd[class=em_side]{padding-left:10px!important;padding-right:10px!important;}
              \ndiv[class=hide_disktop]{display:table!important;float:none!important;width:100%!important;overflow:visible!important;height:auto!important;}
              \nimg[class=em_w140]{width:80px!important;height:auto!important;}
              \nimg[class=em_w150]{width:110px!important;height:auto!important;}
              \nimg[class=em_w40]{width:40px!important;height:auto!important;}
              \ntable[class=em_tbl_312]{width:312px!important;}
              \n.dateheader {width:80% !important}
              \n.date {width:20% !important}
              \n}` }} />
        </head>
        <body>
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
                            <td align="center" valign="middle" style={{ verticalAlign: 'middle' }}>
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
                    <td align="center" valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        {/* banner image starts here*/}
                        <tbody>
                          <tr>
                            <td>
                              <table align="center" bgcolor="#ffffff" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td align="left" valign="bottom" style={{ verticalAlign: 'bottom' }}><a href={ this.props.theme.org.website + this.props.utms } name="logo_link" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img className="em_full_img" style={{ display: 'block' }} alt={ this.props.theme.org.abbr } border={0} height={75} src={ this.props.theme.org.logos.header } title={ this.props.theme.org.abbr } width={400} xt="SPIMAGE" /></a></td>
                                    <td align="right" valign="bottom" style={{ verticalAlign: 'bottom' }}>
                                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                        <tbody>
                                          <tr>
                                            <td style={{color: 'rgb(153, 153, 153)', lineHeight: '14px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '10px'}}>NEWSLETTER<br />{ new Date().toLocaleString('en-AU', {month: 'long', year: 'numeric'}).toUpperCase() }</td>
                                          </tr>
                                          <tr>
                                            <td className="em_height" bgcolor="#ffffff" height={20} style={{lineHeight: '1px', fontSize: '1px'}}>&nbsp;</td>
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
                            <td className="em_height" bgcolor="#ffffff" height={20} style={{lineHeight: '1px', fontSize: '1px', borderTopColor: `${ this.props.theme.colors.primary }`, borderTopWidth: '3px', borderTopStyle: 'solid'}}></td>
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
                    <td align="center" valign="top">&nbsp;</td>
                    <td align="center" valign="top">
                      <table className="em_wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width={580}>
                        <tbody>
                          <tr>
                            <td align="center" valign="top">
                              <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                                <tbody>
                                  <tr>
                                    <td className="em_height" height={20} style={{lineHeight: '1px', fontSize: '1px'}}>&nbsp;</td>
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
                                                  <td valign="top">
                                                    { this.props.theme.org.abbr === 'ADMA IQ' ? <IQFooterLinks /> : '' }
                                                    <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                                      <tbody>
                                                        <tr>
                                                        <td className="em_white" style={{textAlign: 'left', color: 'rgb(255, 255, 255)', lineHeight: '13px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '10px'}}>
                                                          AADL trading as { this.props.theme.org.abbr }. Level 6 50 Carrington Street, Sydney NSW 2000. ABN: 34 002 909 800. This email was sent to %%email%%. Click <a href="http://www.pages01.net/adma/ADMAPreference/unsubscribe.html/" name="www_pages01_net_adma_ADMAPrefe" style={{color: 'rgb(255, 255, 255)'}} xt="SPCLICK">here</a>	if you prefer not to receive emails from { this.props.theme.org.abbr } Australia. © Copyright { new Date().getFullYear() } { this.props.theme.org.abbr } Australia. All Rights Reserved.
                                                        </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table className="em_wrapper" align="right" border={0} cellPadding={0} cellSpacing={0} width={130}>
                                              <tbody>
                                              <tr>
                                                <td className="em_pad_top" align="right" valign="top"><img alt="ADMA" border={0} height={25} src={ this.props.theme.org.logos.lockup } style={{display: 'block'}} title="ADMA" width={110} xt="SPIMAGE" /></td>
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
                                    <td className="em_height" height={20} style={{lineHeight: '1px', fontSize: '1px'}}>&nbsp;</td>
                                  </tr>
                                  <tr>
                                    <td align="left" valign="top">
                                      <table className="em_wrapper" align="left" border={0} cellPadding={0} cellSpacing={0} width="100%">
                                        <tbody>
                                          <tr>
                                            <td align="center" valign="top">
                                              <table align="left" border={0} cellPadding={0} cellSpacing={0} width={159}>
                                                <tbody>
                                                <tr>
                                                  <td align="center" valign="top" width={47} height={47}><a href={this.props.theme.org.social.fb + this.props.utms + '&utm_content=footerSocialFacebook' } name="social_footer_facebook" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="facebook" border={0} width={47} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_facebook.jpg" style={{display: 'block'}} /></a></td>
                                                  <td></td>
                                                  <td align="center" valign="top" width={47} height={47}><a href={this.props.theme.org.social.tw + this.props.utms + '&utm_content=footerSocialTwitter' } name="social_footer_twitter" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="twitter" border={0} width={47} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_twitter.jpg" style={{display: 'block'}} /></a></td>
                                                  <td></td>
                                                  <td align="center" valign="top" width={47} height={47}><a href={this.props.theme.org.social.li + this.props.utms + '&utm_content=footerSocialLinkedin' } name="social_footer_linkedin" target="_blank" rel="noopener noreferrer" xt="SPCLICK"><img alt="linkedin" border={0} width={47} height={47} src="https://adma-public-assets.s3-ap-southeast-2.amazonaws.com/edm/adma/icon_linkedin.jpg" style={{display: 'block'}} /></a></td>
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
                                    <td className="em_height" height={20} style={{lineHeight: '1px', fontSize: '1px'}}>&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          {/* // Footer Ends Here*/}
          {/* Line Starts Here*/}
          <tr>
            <td align="center" bgcolor={ this.props.theme.colors.footerStripe ? this.props.theme.colors.footerStripe : this.props.theme.colors.primary } height={3}>
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
              <table className="em_wrapper" align="center" border={0} cellPadding={0} cellSpacing={0} style={{tableLayout: 'fixed'}} width={580}>
                <tbody>
                  <tr>
                    <td className="em_hide" bgcolor="#010101" height={1} style={{lineHeight: '0px', fontSize: '0px'}}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
                        <tbody>
                          <tr>
                            <td className="em_side" height={40} style={{textAlign: 'left', verticalAlign: 'middle', color: 'rgb(111, 111, 111)', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '11px'}} valign="middle">© { this.props.theme.org.abbr } Australia. All rights reserved.</td>
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
      </body>
      </html>
    );
  }
}

export default Base;