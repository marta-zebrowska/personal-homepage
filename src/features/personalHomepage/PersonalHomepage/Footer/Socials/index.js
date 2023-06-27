import { socialsData } from "./socialsData";
import { Item, Link, List } from "./styled";

export const Socials = () => (
<List>
    {socialsData.map(({name, url, Icon}) => (
        <Item key={name}>
            <Link href={url} title={name} target="_blank" rel="noopener noreferrer">
                <Icon />
            </Link>
        </Item>
    ))}
</List>
);