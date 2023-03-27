import styles from './About.module.css'
export default function About(){
    return(
        <div className={styles.Image}>
        
            <img src="./images/About2.jpg"/>
        <h1>About us</h1>
        <div className={styles.para}>
       <p>
       Lifestyle International (P) Ltd. opened its first Lifestyle store in India in 1999 and in a little over a decade has come to be recognized amongst leading retail companies in the country.

It is a part of the multi-billion dollar Dubai based retail and hospitality conglomerate Landmark Group. Positioned as a trendy, youthful and vibrant store, Lifestyle offers consumers an enjoyable shopping experience. Each Lifestyle store brings together multiple concepts under one roof – Apparel, Footwear, Children’s Wear, Beauty & Accessories offering a convenient one stop shop and a choice of leading national & international brands to customers.

In the year 2005, Lifestyle launched its first specialized, stand-alone home improvement store – Home Centre. Home Centre is a one stop destination for furniture, homeware and soft furnishing that truly represents style, comfort, and individuality. The stores use unique ‘concept’ rooms as the display model, to give consumers a practical idea of how each piece of furniture would look in a particular room.

Recognized as No. 1 Company to Work for in the Retail Sector by Great Places to Work Institute & Retail Association of India in 2014, the company is committed to ‘putting people first’ and giving employees the opportunity to hone their skills and grow their careers in an innovative, collaborative and rewarding work environment.

       </p></div>

<div>
<h1>Our philosphy and Values</h1>
<div className={styles.value}>
<div className={styles.statement}>
    <h3>Statement of purpose</h3>
    <p>Creating exceptional value for all lives we touch</p>
    </div>
    <div className={styles.values}>
    <h3> Our values</h3>
    <p>Passion for Excellence
Integrity in everything we do.
</p>
    
</div>
</div>
</div>
    
        </div>

    )
}