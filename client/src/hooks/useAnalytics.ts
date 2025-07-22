import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface AnalyticsData {
  sessionId: string;
  pageView: string;
  userAgent?: string;
  referrer?: string;
  timeSpent?: number;
  interactionData?: any;
}

// Generate a unique session ID
function generateSessionId(): string {
  return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

// Get or create session ID from localStorage
function getSessionId(): string {
  let sessionId = localStorage.getItem('resume_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    localStorage.setItem('resume_session_id', sessionId);
  }
  return sessionId;
}

export function useAnalytics() {
  const analyticsSubmission = useMutation({
    mutationFn: async (data: AnalyticsData) => {
      const response = await apiRequest('POST', '/api/analytics', data);
      return response.json();
    },
  });

  const trackPageView = (pageView: string) => {
    const data: AnalyticsData = {
      sessionId: getSessionId(),
      pageView,
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined,
    };

    analyticsSubmission.mutate(data);
  };

  const trackInteraction = (pageView: string, interactionData: any, timeSpent?: number) => {
    const data: AnalyticsData = {
      sessionId: getSessionId(),
      pageView,
      userAgent: navigator.userAgent,
      timeSpent,
      interactionData,
    };

    analyticsSubmission.mutate(data);
  };

  return {
    trackPageView,
    trackInteraction,
    isTracking: analyticsSubmission.isPending
  };
}

// Custom hook for automatic page view tracking
export function usePageView(pageView: string) {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(pageView);
  }, [pageView, trackPageView]);
}