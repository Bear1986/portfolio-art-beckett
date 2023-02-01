import Image from 'next/image'
import Art from '../public/images/Art.gif'
export default function HomeHero() {
   const styles = {
    whiteLine:"w-full h-[2px] bg-white translate-y-20",
    orangeLine:"w-full h-[2px] bg-[#D94D29] translate-y-20",
    imageWrapper:"w-full flex justify-center mt-[5rem] ",
    buttonWrapper:"w-full h-2 text-white flex justify-around",
    leftButton:"hover:scale-110 hover:-rotate-12 duration-300 ",
    buttonText:"text-3xl hover:text-[#D94D29] mb-2",
    rightButton:"hover:scale-110 hover:rotate-12 duration-300 "
   }
    
    return(<>
    <div className={styles.whiteLine} />
    <div className={styles.orangeLine} />
<div className={styles.imageWrapper}>
<Image src={Art} alt='Arthur Beckett' width={400} height={400}/>
</div>
<div className={styles.buttonWrapper}>
<button className={styles.leftButton}>
<h1 className={styles.buttonText}>About me</h1>
</button>
<button className={styles.rightButton}>
<h1 className={styles.buttonText}>My work</h1>
</button>
</div>
    </>)
}