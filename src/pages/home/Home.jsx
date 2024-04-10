import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Section from "../../components/Section";
import CardContainer from "../../components/CardContainer";
import ContactForm from "../../components/Form";
import Skills from "../../components/Skills";

function HomePage(){
    return(
    <>
    
        <Header />
        <Banner />
        <Section 
            title='Réalisations'
            id='works'
        >
            <CardContainer />
        </Section>
        <Section 
            title='Compétences'
            id='skills'
        >
            <Skills /> 
        </Section>

        <Section 
            title='Contact'
            id='contact'
        >
            <ContactForm />
        </Section>
        <Footer>
            
        </Footer>
    </>
    )
}

export default HomePage