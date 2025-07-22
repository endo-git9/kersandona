import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import type { ContactSubmission, VisitorAnalytics } from '@shared/schema';

export function AdminDashboard() {
  const { data: contacts, isLoading: contactsLoading } = useQuery<ContactSubmission[]>({
    queryKey: ['/api/contact'],
  });

  const { data: analytics, isLoading: analyticsLoading } = useQuery<VisitorAnalytics[]>({
    queryKey: ['/api/analytics'],
  });

  if (contactsLoading || analyticsLoading) {
    return (
      <div className="min-h-screen bg-game-dark flex items-center justify-center">
        <div className="text-game-teal">
          <i className="fas fa-spinner fa-spin text-2xl"></i>
          <p className="mt-2">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-game-dark p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-game-teal mb-2">
            <i className="fas fa-chart-bar mr-3"></i>
            Admin Dashboard
          </h1>
          <p className="text-game-muted">Monitor contact submissions and visitor analytics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Statistics Cards */}
          <Card className="rpg-dialog border-game-teal/30">
            <CardHeader>
              <CardTitle className="text-game-teal flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                Contact Submissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-game-text">
                {contacts?.length || 0}
              </div>
              <p className="text-game-muted">Total messages received</p>
            </CardContent>
          </Card>

          <Card className="rpg-dialog border-game-purple/30">
            <CardHeader>
              <CardTitle className="text-game-purple flex items-center">
                <i className="fas fa-eye mr-2"></i>
                Page Views
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-game-text">
                {analytics?.length || 0}
              </div>
              <p className="text-game-muted">Total visitor interactions</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Contact Submissions */}
          <Card className="rpg-dialog border-game-teal/30">
            <CardHeader>
              <CardTitle className="text-game-teal">Recent Contact Submissions</CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              {contacts && contacts.length > 0 ? (
                <div className="space-y-4">
                  {contacts.slice(0, 10).map((contact) => (
                    <motion.div
                      key={contact.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-game-darker p-4 rounded-lg border border-game-teal/20"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold text-game-text">{contact.name}</h4>
                          <p className="text-sm text-game-muted">{contact.email}</p>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </Badge>
                      </div>
                      <div className="mb-2">
                        <h5 className="font-medium text-game-teal text-sm">{contact.subject}</h5>
                      </div>
                      <p className="text-sm text-game-text line-clamp-2">{contact.message}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="fas fa-inbox text-4xl text-game-muted mb-4"></i>
                  <p className="text-game-muted">No contact submissions yet</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Visitor Analytics */}
          <Card className="rpg-dialog border-game-purple/30">
            <CardHeader>
              <CardTitle className="text-game-purple">Recent Visitor Activity</CardTitle>
            </CardHeader>
            <CardContent className="max-h-96 overflow-y-auto">
              {analytics && analytics.length > 0 ? (
                <div className="space-y-3">
                  {analytics.slice(0, 15).map((visit) => (
                    <motion.div
                      key={visit.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-game-darker p-3 rounded-lg border border-game-purple/20"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-game-text">{visit.pageView}</p>
                          <p className="text-xs text-game-muted">
                            Session: {visit.sessionId.split('_')[2]}
                            {visit.timeSpent && ` • ${visit.timeSpent}s`}
                          </p>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {new Date(visit.createdAt).toLocaleTimeString()}
                        </Badge>
                      </div>
                      {visit.interactionData && (
                        <div className="mt-2 text-xs text-game-muted">
                          <i className="fas fa-mouse-pointer mr-1"></i>
                          Interaction recorded
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <i className="fas fa-chart-line text-4xl text-game-muted mb-4"></i>
                  <p className="text-game-muted">No visitor data yet</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        {analytics && analytics.length > 0 && (
          <Card className="rpg-dialog border-game-teal/30 mt-6">
            <CardHeader>
              <CardTitle className="text-game-teal">Quick Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-game-purple">
                    {new Set(analytics.map(a => a.sessionId)).size}
                  </div>
                  <p className="text-xs text-game-muted">Unique Visitors</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-game-teal">
                    {analytics.filter(a => a.pageView === '/').length}
                  </div>
                  <p className="text-xs text-game-muted">Home Views</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-game-gold">
                    {(() => {
                      const timeSpentItems = analytics.filter(a => a.timeSpent);
                      if (timeSpentItems.length === 0) return 0;
                      return Math.round(timeSpentItems.reduce((acc, a) => acc + (a.timeSpent || 0), 0) / timeSpentItems.length);
                    })()}s
                  </div>
                  <p className="text-xs text-game-muted">Avg. Time</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-game-green">
                    {analytics.filter(a => a.interactionData).length}
                  </div>
                  <p className="text-xs text-game-muted">Interactions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}