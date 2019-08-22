import React from 'react';

class IQFooterLinks extends React.Component {
  render() {
    return (
      <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
        <tr>
            <td align="center" className="em_white" style={{fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '12px', lineHeight: '18px', color: '#ffffff', textAlign: 'center'}}>
              <a href="https://www.adma.com.au/user" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>My&nbsp;Account </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/courses#sydney" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>Sydney&nbsp;Courses </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/courses#melbourne" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>Melbourne&nbsp;Courses </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/courses#brisbane" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>Brisbane&nbsp;Courses </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/courses#perth" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>Perth&nbsp;Courses </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/courses#online" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>Online&nbsp;Courses </font></span></a>
              <span>|</span> <a href="https://www.adma.com.au/iq/about" style={{textDecoration: 'none', color: '#ffffff'}}><span style={{textDecoration: 'none', color: '#ffffff'}}><font style={{textDecoration: 'none', color: '#ffffff'}}>IQ&nbsp;FAQs</font></span></a>
            </td>
          </tr>
          <tr>
            <td className="em_height" height={10} style={{lineHeight: '1px', fontSize: '1px'}}>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default IQFooterLinks;
