import { tmpl } from './link.tmpl';
import { Block } from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../utils/routes/withRouter';

interface IProps extends PropsWithRouter {
    to: string;
    titleLink: string;
    className?: string;
    events?: {
        click: (event: MouseEvent) => void;
    }
}

class BaseLink extends Block {
    constructor(props: IProps) {
        super({
            ...props,
            events: {
                click: (event: any) => {
                    event.preventDefault();
                    this.navigate();
                },
            },
        });
    }

    navigate() {
        this.props.router.go(this.props.to);
    }

    render() {
        return this.compile(tmpl, this.props);
    }
}

export const Link = withRouter(BaseLink);
