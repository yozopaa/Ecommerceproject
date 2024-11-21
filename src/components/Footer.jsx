import React from 'react';

function Footer() {
    const styles = {
        footer: {
            backgroundColor: "hsl(241, 15%, 12%)",
            width: "100vw",
            height: "auto",
            display: "flex",
            justifyContent: "space-between",
            padding: "40px 5%",
            position: "relative",
            flexWrap: "wrap",
        },
        section: {
            width: "30%",
            minWidth: "250px",
            height: "auto",
            lineHeight: "1.8",
            paddingLeft: "20px",
            paddingBottom: "20px",
            paddingRight: "20px",
            textAlign: "left",
        },
        sectionTitle: {
            fontSize: "26px",
            fontFamily: "proxima-nova, sans-serif",
            fontWeight: "bold",
            color: "hsl(0,0%,96%)",
            marginBottom: "15px",
        },
        text: {
            color: "hsl(0,0%,96%)",
            fontSize: "16px",
            fontFamily: "proxima-nova, sans-serif",
            textDecoration: "underline",
            lineHeight: "1.6",
            marginTop: "10px",
            cursor: "pointer",
            display: "inline-block",
        },
        missionText: {
            fontSize: "18px",
            lineHeight: "1.8",
            display: "inline-block",
            color: "hsl(0,0%,96%)",
            marginTop: "10px",
        },
    };

    return (
        <div style={styles.footer}> 
          <div style={styles.section}>
                <h2 style={styles.sectionTitle}>HEFO</h2>
            </div>
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>Our Mission</h2>
                <p style={styles.missionText}>
                    We are dedicated to helping our clients achieve their goals with a holistic approach to enhance well-being and satisfaction.
                </p>
            </div>
         
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>About</h2>
                <p style={styles.text}>contact us</p>
                <br />
                <p style={styles.text}>about us</p>
            </div>
        </div>
    );
}

export default Footer;
