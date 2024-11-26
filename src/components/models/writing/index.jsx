import { Description } from "../../UI/description"
import { Title } from "../../UI/title"
import { BlogPreview } from "./blog preview"


export const Writing = () => {
    return (
        <section>
            <Title>Writing</Title>
            <Description>I created this blog as a personal space to share professional posts about web engineering as well as stories from my personal life. Through sharing my experiences and challenges, I hope we can learn and grow together.</Description>

            <BlogPreview />
        </section>
    )
}