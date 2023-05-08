import { Routes, Route } from "react-router-dom"
import { NavBar } from "./components"
import { HomePage, AboutPage, BlogPage, ContactPage, PostPage, NewPostPage } from "./pages/"

export const MicroApp = () => {
  return (
    <>
        <NavBar />
        <div className="m-2">
          <Routes>
            <Route path="home" element={ <HomePage/> } />
            <Route path="about" element={ <AboutPage/> } />
            <Route path="blog" element={ <BlogPage/> } />
            <Route path="contact" element={ <ContactPage/> } />
            <Route path="posts/new" element={ <NewPostPage /> } />
            <Route path="posts/edit/:id" element={ <NewPostPage /> } />
            <Route path="posts/:id" element={ <PostPage/> } />

            <Route path="/" element={ <HomePage/> } />
          </Routes>
        </div>
    </>
  )
}
