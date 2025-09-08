import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import MarketplacePage from './pages/MarketplacePage';
import PersonsPage from './pages/PersonsPage';
import ProjectsPage from './pages/ProjectsPage';
import StreamsPage from './pages/StreamsPage';
import ProfilePage from './pages/ProfilePage';
import DeskPage from './pages/DeskPage';
import MessagesPage from './pages/MessagesPage';
import FavoritesPage from './pages/FavoritesPage';
import CalendarPage from './pages/CalendarPage';
import HelpPage from './pages/HelpPage';
import NotificationsPage from './pages/NotificationsPage';
import MarketEducationPage from './pages/MarketEducationPage';
import MarketInvestPage from './pages/MarketInvestPage';
import EducationProductCoursePage from './pages/EducationProductCoursePage';
import EducationProductConsultPage from './pages/EducationProductConsultPage';
import EducationPage from './pages/EducationPage';
import SocialPage from './pages/SocialPage';
import MarketplaceLandingPage from './pages/MarketplaceLandingPage';
import NewsPage from './pages/NewsPage';
import PartnershipPage from './pages/PartnershipPage';
import LoginPage from './pages/LoginPage';
import InvestmentsPage from './pages/InvestmentsPage';

import InvestmentsLandingPage from './pages/InvestmentsLandingPage';

export const routes = [
    { path: '/', component: LandingPage, landingLayout: true },
    { path: '/education', component: EducationPage, landingLayout: true },
    { path: '/social', component: SocialPage, landingLayout: true },
    { path: '/investments', component: InvestmentsLandingPage, landingLayout: true },
    { path: '/marketplace-landing', component: MarketplaceLandingPage, landingLayout: true },
    { path: '/news', component: NewsPage, landingLayout: true },
    { path: '/partnership', component: PartnershipPage, landingLayout: true },
    { path: '/login', component: LoginPage },
    { path: '/home', component: HomePage, layout: true },
    { path: '/timeline', component: TimelinePage, layout: true },
    { path: '/marketplace', component: MarketplacePage, layout: true },
    { path: '/persons', component: PersonsPage, layout: true },
    { path: '/projects', component: ProjectsPage, layout: true },
    { path: '/streams', component: StreamsPage, layout: true },
    { path: '/profile', component: ProfilePage, layout: true },
    { path: '/desk', component: DeskPage, layout: true },
    { path: '/messages', component: MessagesPage, layout: true },
    { path: '/favorites', component: FavoritesPage, layout: true },
    { path: '/calendar', component: CalendarPage, layout: true },
    { path: '/help', component: HelpPage, layout: true },
    { path: '/notifications', component: NotificationsPage, layout: true },
    { path: '/market_education', component: MarketEducationPage, layout: true },
    { path: '/market_invest', component: MarketInvestPage, layout: true },
    { path: '/education_product_course', component: EducationProductCoursePage, layout: true },
    { path: '/education_product_consult', component: EducationProductConsultPage, layout: true },
];
