import {useState,useEffect} from 'react'
import {Container,Row} from 'react-bootstrap'

// Component's 
import Aside from '../components/aside/aside'
import VideoSection from '../components/video-section/video-section'
import Navbar from '../components/navbar/navbar'

// Context api's
import {linkStore} from '../contexts/linkStore'

export default function Home(){

    const [link,setLink] = useState()
    const [videoprops,setVideoProps] = useState({
        "id": "zzjsW3gqurc",
        "title": "Bedavaysa Ürün Sensin - Bulut Bilişimi (Cloud Computing) Anlamak",
        "description": "Tarih tekerrür ediyor ve sadece şirketler değil biz bile bizden çok uzakta büyük binalarda bulunan işlem gücünü kullanmaya başladık. Buna da “cloud computing” yani “bulut bilişim” diyoruz ve internetin durdurulamaz yükselişi ile birlikte yine çok radikal bir trend değişiminin tam da ortasındayız. Ve işin içinde bu video da dahil olmak üzere Youtube ve benzeri platformlarda gördüğünüz reklamlar var, bu hizmetlerin neden bedava olduğu var ve gelecekte hepsinin paralı olma ihtimali de var. Gelin önce bir cloud computing’i anlayalım sonra bunları konuşalım.\n\n#bulutbilişim\n\nVİDEO METNİ VE YARARLANDIĞIM KAYNAKLAR: https://bebarbilim.net\n\n► Bebar Bilim'e Destek Olun!: https://bit.ly/36ASr9R \nPatreon'dan destek olmak için ► https://www.patreon.com/bebarbilim\n\n► BebarScience (İngilizce Kanal): https://bit.ly/2R0gIkT\n\n► BebarWissen (Almanca Kanal): https://bit.ly/34y3UGz\n\n► BebarBilim Discord Sunucusu: https://discord.gg/WQpEvQ4 \n\nİçerikler ayrıca \"aklingolgesi.com\"'da: https://www.aklingolgesi.com/brand/bebar-bilim/\n\nbebar bilim'i sosyal medyadan da takip edin:\n\nInstagram ► https://www.instagram.com/bebarbilim/\nTwitter ► https://twitter.com/BebarBilim\nFacebook ► https://www.facebook.com/bebarbilim\n\nTüm Videolar ►  https://bit.ly/2zVVMS1\nYeni videoları kaçırmamak için ►  https://bit.ly/2FkZR8e\n\nOynatma listeleri: \nKlasik Fizikten Kuantum Fiziğine ► https://bit.ly/337BSDJ\nDünyayı Değiştirecek Teknolojiler ► https://bit.ly/2q2Lxul\nPsikoloji ► https://bit.ly/34xfFNh\nTeknoloji ve Gelecek ► https://bit.ly/2R3twXY\nEğitim ► https://bit.ly/34J32Pa",
    })
    const [linkarr,setLinkArr] = useState([])

    useEffect(() => {
        setLinkArr([
            ...linkarr,
            link
        ])
        console.log(linkarr)
    },[link]);

    return (
        <>
        <title>Room: {window.location.pathname.replace(/\/room\//, "")} </title>
        <linkStore.Provider value={linkarr}>
            <Navbar token={setLink} />
            <Container>
                <Row>
                <VideoSection videoprops={videoprops} />
                <Aside videoprops={setVideoProps} />
                </Row>
                <hr className="mt-4"/>
                <p className="text-center small">
                    Developed by <a target="_blank" rel="noreferrer" href="https://github.com/jack5341/watch-video-together">jack5341</a>
                </p>
            </Container>
        </linkStore.Provider>
        </>
    )
}