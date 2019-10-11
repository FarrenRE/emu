import React from 'react';

const HeaderMonthly = ({ theme, utms }) => {
  return (
    <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
      <tbody>
        <tr>
          <td align="left" valign="bottom" style={{ verticalAlign: 'bottom' }}>
            <a href={theme.org.website + utms} name="logo_link" target="_blank" rel="noopener noreferrer" xt="SPCLICK">
              <img className="em_full_img" style={{ display: 'block' }} alt={theme.org.abbr} border={0} height={75} src={theme.org.logos.header} title={theme.org.abbr} width={400} />
            </a>
          </td>
          <td align="right" valign="bottom" style={{ verticalAlign: 'bottom' }}>
            <table align="center" border={0} cellPadding={0} cellSpacing={0} width="100%">
              <tbody>
                <tr>
                  <td style={{ color: 'rgb(153, 153, 153)', lineHeight: '14px', fontFamily: 'Helvetica, Arial, sans-serif', fontSize: '10px' }}>NEWSLETTER<br />{new Date().toLocaleString('en-AU', { month: 'long', year: 'numeric' }).toUpperCase()}</td>
                </tr>
                <tr>
                  <td className="em_height" height={20} style={{ lineHeight: '1px', fontSize: '1px' }}>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default HeaderMonthly;