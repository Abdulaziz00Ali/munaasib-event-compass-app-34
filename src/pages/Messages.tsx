
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import ConversationList from '@/components/messaging/ConversationList';
import ChatInterface from '@/components/messaging/ChatInterface';
import { useToast } from '@/hooks/use-toast';

export interface Conversation {
  id: string;
  participantName: string;
  participantType: 'customer' | 'vendor';
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  avatar?: string;
}

export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: 'customer' | 'vendor';
  content: string;
  timestamp: string;
  isRead: boolean;
}

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: '1',
      participantName: 'أحمد محمد',
      participantType: 'customer',
      lastMessage: 'بخصوص حجز يوم الخميس، هل يمكن تأكيد الموعد؟',
      lastMessageTime: 'منذ 5 دقائق',
      unreadCount: 2,
    },
    {
      id: '2',
      participantName: 'سارة علي',
      participantType: 'customer',
      lastMessage: 'شكراً لكم على الخدمة الممتازة',
      lastMessageTime: 'منذ ساعة',
      unreadCount: 0,
    },
    {
      id: '3',
      participantName: 'مطبخ الأصالة',
      participantType: 'vendor',
      lastMessage: 'نعتذر عن التأخير، سنصل في الموعد المحدد',
      lastMessageTime: 'منذ 3 ساعات',
      unreadCount: 1,
    },
  ]);
  
  const [messages, setMessages] = useState<{ [key: string]: Message[] }>({
    '1': [
      {
        id: '1',
        senderId: 'customer1',
        senderName: 'أحمد محمد',
        senderType: 'customer',
        content: 'السلام عليكم، أريد حجز خدماتكم ليوم الخميس القادم',
        timestamp: '2024-01-15 10:30',
        isRead: true,
      },
      {
        id: '2',
        senderId: 'vendor1',
        senderName: 'مطبخ الضيافة السعودي',
        senderType: 'vendor',
        content: 'وعليكم السلام، أهلاً وسهلاً. نعم متاح يوم الخميس. كم عدد الأشخاص؟',
        timestamp: '2024-01-15 10:35',
        isRead: true,
      },
      {
        id: '3',
        senderId: 'customer1',
        senderName: 'أحمد محمد',
        senderType: 'customer',
        content: 'حوالي 50 شخص، والحفلة ستكون في الرياض',
        timestamp: '2024-01-15 10:40',
        isRead: true,
      },
      {
        id: '4',
        senderId: 'customer1',
        senderName: 'أحمد محمد',
        senderType: 'customer',
        content: 'بخصوص حجز يوم الخميس، هل يمكن تأكيد الموعد؟',
        timestamp: '2024-01-15 11:00',
        isRead: false,
      },
    ]
  });

  const { toast } = useToast();

  const handleSendMessage = (messageContent: string) => {
    if (!selectedConversation) return;

    const newMessage: Message = {
      id: String(Date.now()),
      senderId: 'vendor1',
      senderName: 'مطبخ الضيافة السعودي',
      senderType: 'vendor',
      content: messageContent,
      timestamp: new Date().toISOString(),
      isRead: false,
    };

    // Add message to conversation
    setMessages(prev => ({
      ...prev,
      [selectedConversation]: [...(prev[selectedConversation] || []), newMessage]
    }));

    // Update conversation last message
    setConversations(prev => prev.map(conv => 
      conv.id === selectedConversation 
        ? { ...conv, lastMessage: messageContent, lastMessageTime: 'الآن' }
        : conv
    ));
  };

  const selectedConversationData = conversations.find(c => c.id === selectedConversation);
  const conversationMessages = selectedConversation ? messages[selectedConversation] || [] : [];

  return (
    <Layout title="الرسائل" showBack>
      <div className="h-[calc(100vh-120px)] flex">
        {/* Conversation List */}
        <div className={`${selectedConversation ? 'hidden md:block' : 'block'} w-full md:w-1/3 border-l border-gray-200`}>
          <ConversationList
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={setSelectedConversation}
          />
        </div>

        {/* Chat Interface */}
        <div className={`${selectedConversation ? 'block' : 'hidden md:block'} w-full md:w-2/3`}>
          {selectedConversation && selectedConversationData ? (
            <ChatInterface
              conversation={selectedConversationData}
              messages={conversationMessages}
              onBack={() => setSelectedConversation(null)}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <p>اختر محادثة لبدء المراسلة</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Messages;
