import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Help from './components/Help';
import Index from './components/Index';
import NotFound from './components/NotFound';
import EditIndividual from './components/questionnaire/EditIndividual';
import QuestionnaireLayout from './components/questionnaire/layouts/Layout';
import Questionnaire from './components/questionnaire/Index';
import FormSectionPage from './components/questionnaire/FormSectionPage';
import { AppProvider } from './context/AppContext';
import SummaryPage from './components/questionnaire/SummaryPage';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/help" element={<Help />} />
          <Route path="/questionnaire" element={<QuestionnaireLayout />}>
            <Route index element={<Questionnaire />} />
            <Route path="overview" element={<Questionnaire />} />
            <Route path="individual" element={<EditIndividual />} />
            <Route path=":slug" element={<FormSectionPage />} />
            <Route path="summary" element={<SummaryPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
