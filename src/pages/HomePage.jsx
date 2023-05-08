import { 
  PrincipalImage, 
  SecondSection, 
  VideoInformation, 
  Footer 
} from "../components/homePage"

export const HomePage = () => {
  return (
    <section>
      <PrincipalImage />

      <SecondSection />

      <VideoInformation />

      <Footer />
    </section>
  )
}
