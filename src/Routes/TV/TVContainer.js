import react from "react";
import TVPresenter from "./TVPresenter";

export class extends React.Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error: null,
        loading: true
    };

    render() {
        const { topRated, popular, airingToday, error, loading } = this.state;
        return <TVPresenter 
            topRated={topRated}       
            popular={popular}     
            airingToday={airingToday}     
            error={error}     
            loading={loading}     
        />
    }
}