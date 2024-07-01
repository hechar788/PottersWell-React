import "../styles/header.css";
import "../styles/carousel.css"
import "../styles/display.css"
import { data } from "../data";
import { Nav } from "../components/nav";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Carousel } from "../components/carousel";
import { Display } from "../components/display";
import { EnquiryForm } from "../components/enquiry_form";
import { MainSection } from "../components/main_section";

export function Home() {
    return (
        <>
            <Nav navImg={data.navData.navImg} navHeader={data.navData.navHeader} />
            <Header headerImg={data.headerData.headerImg} headerLogo={data.headerData.headerLogo} />
            <Hero heroImg={data.heroData.heroImg} />
            <Carousel />
            <MainSection />
            <Display data={data.displayData} />
            <EnquiryForm />
        </>
    )
}