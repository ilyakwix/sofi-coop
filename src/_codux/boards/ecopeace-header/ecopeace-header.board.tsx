import { createBoard } from '@wixc3/react-board';
import { EcopeaceHeader } from '../../../components/ecopeace-header/ecopeace-header';

export default createBoard({
    name: 'EcopeaceHeader',
    Board: () => <EcopeaceHeader />,
    isSnippet: true,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
        windowWidth: 1400,
    },
});
