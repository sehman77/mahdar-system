<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>محضر - Mahdar</title>
    
    <!-- استدعاء Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- استدعاء Babel لترجمة أكواد React/JSX -->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    
    <!-- استدعاء خط تجوال -->
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet">
    
    <style>
        body { font-family: 'Tajawal', sans-serif; background-color: #f8fafc; margin: 0; padding: 0; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body>
    <!-- الحاوية الأساسية لتطبيق React -->
    <div id="root"></div>

    <!-- كود التطبيق (React + JSX) -->
    <script type="text/babel" data-type="module">
        // استدعاء مكتبات React و الأيقونات من روابط خارجية مدعومة
        import React, { useState, useEffect } from 'https://esm.sh/react@18';
        import ReactDOM from 'https://esm.sh/react-dom@18/client';
        import { 
            FilePlus, FileText, Calendar, Users, Clock, MapPin, 
            CheckCircle, Search, ChevronRight, Home, ArrowLeft, 
            Trash2, Eye, AlertCircle, Plus, Mail, Send, 
            Activity, CheckSquare, RotateCcw 
        } from 'https://esm.sh/lucide-react@0.292.0';

        // ---------------------------------------------------------
        // المكون الرئيسي: App
        // ---------------------------------------------------------
        function App() {
          const [activeView, setActiveView] = useState('home');

          const engravedStyle = {
            color: '#1e293b',
            textShadow: '1px 1px 1px rgba(255,255,255,1), -1px -1px 1px rgba(0,0,0,0.15)',
            fontFamily: '"Tajawal", sans-serif',
          };

          return (
            <div className="min-h-screen flex flex-col font-sans selection:bg-indigo-100 selection:text-indigo-900">
              {/* الهيدر */}
              <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 h-24 flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-5 cursor-pointer group" onClick={() => setActiveView('home')}>
                    <div className="flex items-center gap-2 border-l-2 border-slate-100 pl-3 sm:pl-5 ml-1 sm:ml-2">
                      <img src="https://i.imgur.com/1eg1BBv.jpeg" alt="شعار الجمعية" className="h-12 sm:h-16 w-auto object-contain rounded-md" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden md:flex w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                        <FileText className="text-white w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <div className="flex flex-col">
                        <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-wide" style={engravedStyle}>
                          محضر – Mahdar
                        </h1>
                        <span className="text-[10px] sm:text-xs text-indigo-600 font-bold mt-0.5">خاص بنظام الجمعية</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 py-1.5 px-2 rounded-full border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer shadow-sm flex-shrink-0">
                    <div className="text-slate-700 text-sm hidden sm:block text-left px-2">
                      <p className="font-bold text-slate-800 text-sm">د. محمد</p>
                      <p className="text-[11px] text-slate-500">مدير النظام</p>
                    </div>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-slate-200 overflow-hidden flex-shrink-0 bg-white p-0.5">
                      <img src="https://i.imgur.com/jQbIGAB.jpeg" alt="شعار المستخدم" className="w-full h-full object-contain rounded-full" />
                    </div>
                  </div>
                </div>
              </header>

              {/* المحتوى */}
              <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col relative">
                {activeView === 'home' && <HomeView onViewChange={setActiveView} />}
                {activeView === 'create' && <CreateMahdar onViewChange={setActiveView} />}
                {activeView === 'log' && <MahdarLog onViewChange={setActiveView} />}
              </main>

              {/* الفوتر */}
              <footer className="bg-white border-t border-slate-200 py-5 mt-auto">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-600 font-medium">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    جميع الحقوق محفوظة للجمعية &copy; {new Date().getFullYear()}
                  </p>
                  <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100">
                    <span className="text-slate-400">فكرة وتطوير /</span>
                    <a href="https://reach.link/mohammed-bin-sehman" target="_blank" rel="noopener noreferrer" className="text-indigo-700 font-bold flex items-center gap-1 hover:text-indigo-900 hover:underline transition-all cursor-pointer">
                      محمد بن عبدالله آل سحمان
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          );
        }

        // ---------------------------------------------------------
        // الشاشة الرئيسية
        // ---------------------------------------------------------
        function HomeView({ onViewChange }) {
          const [stats, setStats] = useState({ total: 42, approved: 38, pending: 4 });
          const [showConfirmModal, setShowConfirmModal] = useState(false);

          return (
            <div className="flex-1 flex flex-col animate-in fade-in zoom-in-95 duration-500 pb-10 max-w-5xl mx-auto w-full">
              {/* الترحيب */}
              <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 rounded-3xl p-8 md:p-10 mb-8 overflow-hidden shadow-xl border border-slate-700">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4 tracking-wide">
                      مرحبًا بك، د. محمد 👋
                    </h2>
                    <div className="text-slate-300 text-sm md:text-base max-w-xl leading-relaxed space-y-2">
                      <p className="font-bold text-lg text-indigo-300">بوابة إدارة محاضر الجمعية</p>
                      <p>منصة رقمية احترافية لتنظيم وتوثيق محاضر الاجتماعات، تتيح إنشاء المحاضر الجديدة، ومتابعة الإحصاءات، والوصول السريع إلى السجلات المعتمدة بدقة وموثوقية عالية.</p>
                    </div>
                  </div>
                  <div className="hidden md:flex flex-shrink-0 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4 items-center gap-4 shadow-lg">
                    <div className="text-left">
                      <p className="text-white font-bold text-lg">مارس 2026</p>
                      <p className="text-indigo-200 text-xs font-medium">يوم الإثنين، 9 مارس</p>
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center text-white border border-indigo-400/30">
                      <Calendar className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* الإحصائيات */}
              <div className="flex items-center justify-between mb-4 px-2 relative z-20">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-slate-800 rounded-full"></div>
                  <h3 className="text-xl font-extrabold text-slate-800">إحصائيات النظام</h3>
                </div>
                <button onClick={() => setShowConfirmModal(true)} disabled={stats.total === 0} className="flex items-center gap-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 px-3 py-1.5 rounded-lg border border-rose-100 disabled:opacity-50">
                  <RotateCcw className="w-3.5 h-3.5" /> تصفير الإحصائيات
                </button>
              </div>

              {showConfirmModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
                  <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl text-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-4 mx-auto"><AlertCircle className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">تأكيد التصفير</h3>
                    <p className="text-slate-500 text-sm mb-6">هل أنت متأكد من رغبتك في تصفير جميع الإحصائيات؟ لا يمكن التراجع.</p>
                    <div className="flex gap-3">
                      <button onClick={() => setShowConfirmModal(false)} className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 font-bold">إلغاء</button>
                      <button onClick={() => { setStats({ total: 0, approved: 0, pending: 0 }); setShowConfirmModal(false); }} className="flex-1 px-4 py-2.5 rounded-xl bg-rose-600 text-white font-bold">تأكيد</button>
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center"><FileText className="w-7 h-7" /></div>
                  <div><p className="text-slate-500 text-sm font-bold mb-1">إجمالي المحاضر</p><h4 className="text-2xl font-black">{stats.total}</h4></div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center"><CheckSquare className="w-7 h-7" /></div>
                  <div><p className="text-slate-500 text-sm font-bold mb-1">محاضر معتمدة</p><h4 className="text-2xl font-black">{stats.approved}</h4></div>
                </div>
                <div className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center gap-4">
                  <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center"><Activity className="w-7 h-7" /></div>
                  <div><p className="text-slate-500 text-sm font-bold mb-1">قيد المراجعة</p><h4 className="text-2xl font-black">{stats.pending}</h4></div>
                </div>
              </div>

              {/* الأزرار الرئيسية */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                <button onClick={() => onViewChange('create')} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 text-right hover:border-indigo-300 transition-all">
                  <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6"><FilePlus className="w-8 h-8" /></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">إنشاء محضر جديد</h3>
                  <p className="text-slate-500 text-sm mb-8">ابدأ في صياغة محضر اجتماع جديد، وقم بتوثيق الحضور والقرارات المتخذة.</p>
                  <div className="flex items-center justify-between text-indigo-700 font-bold text-sm bg-indigo-50 w-full px-5 py-3.5 rounded-xl border border-indigo-100">
                    <span>البدء بالإنشاء</span><ArrowLeft className="w-5 h-5" />
                  </div>
                </button>

                <button onClick={() => onViewChange('log')} className="group bg-white p-6 md:p-8 rounded-3xl border border-slate-200 text-right hover:border-emerald-300 transition-all">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6"><Search className="w-8 h-8" /></div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">سجل المحاضر</h3>
                  <p className="text-slate-500 text-sm mb-8">استعرض الأرشيف الكامل للمحاضر السابقة، وتابع حالة المحاضر المعتمدة.</p>
                  <div className="flex items-center justify-between text-emerald-700 font-bold text-sm bg-emerald-50 w-full px-5 py-3.5 rounded-xl border border-emerald-100">
                    <span>استعراض السجل</span><ArrowLeft className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          );
        }

        // ---------------------------------------------------------
        // شاشة إنشاء محضر
        // ---------------------------------------------------------
        function CreateMahdar({ onViewChange }) {
          const [attendees, setAttendees] = useState([{ id: 1, name: '', email: '', status: 'حاضر' }]);
          const [showSuccessModal, setShowSuccessModal] = useState(false);

          return (
            <div className="animate-in fade-in duration-500 max-w-5xl mx-auto w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-white p-5 rounded-3xl border border-slate-200">
                 <div>
                   <button onClick={() => onViewChange('home')} className="flex items-center gap-1.5 text-slate-500 font-bold mb-2 text-sm">
                     <ChevronRight className="w-4 h-4" /> العودة للرئيسية
                   </button>
                   <h2 className="text-2xl font-extrabold text-slate-800 flex items-center gap-3">
                     إنشاء محضر جديد
                     <span className="text-xs bg-amber-100 text-amber-700 px-3 py-1.5 rounded-full">مسودة</span>
                   </h2>
                 </div>
                 <div className="flex items-center gap-3">
                    <button onClick={() => onViewChange('home')} className="px-6 py-3 rounded-xl border font-bold text-sm">إلغاء</button>
                    <button onClick={() => setShowSuccessModal(true)} className="bg-indigo-600 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 text-sm">
                      <Send className="w-5 h-5" /> اعتماد وإرسال
                    </button>
                 </div>
              </div>

              {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
                  <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4 mx-auto"><CheckCircle className="w-8 h-8" /></div>
                    <h3 className="text-xl font-bold mb-2">تم الاعتماد بنجاح!</h3>
                    <p className="text-slate-500 text-sm mb-6">تم حفظ المحضر واعتماده بنجاح. سيتم الإرسال للمسجلين.</p>
                    <button onClick={() => { setShowSuccessModal(false); onViewChange('log'); }} className="w-full px-4 py-3 rounded-xl bg-emerald-600 text-white font-bold">الاستمرار لسجل المحاضر</button>
                  </div>
                </div>
              )}

              <form className="space-y-6">
                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200">
                  <h3 className="text-xl font-bold mb-6">المعلومات الأساسية</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-bold block mb-2">عنوان المحضر</label>
                      <input type="text" placeholder="مثال: محضر اجتماع مجلس الإدارة الدوري" className="w-full px-4 py-3 rounded-xl border outline-none font-bold" />
                    </div>
                    <div>
                      <label className="text-sm font-bold block mb-2">رقم المحضر</label>
                      <input type="text" value="MHD-2026-0042" disabled className="w-full px-4 py-3 rounded-xl border bg-slate-50 font-mono text-left" dir="ltr" />
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200">
                  <h3 className="text-xl font-bold mb-6">التفاصيل والقرارات</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-bold">قائمة الحضور والغياب</label>
                      <button type="button" onClick={() => setAttendees([...attendees, {id: Date.now(), name:'', email:'', status:'حاضر'}])} className="text-xs font-bold text-indigo-700 bg-indigo-50 px-4 py-2 rounded-lg flex items-center gap-1">
                        <Plus className="w-4 h-4"/> إضافة شخص
                      </button>
                    </div>
                    <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden divide-y">
                      {attendees.map(a => (
                        <div key={a.id} className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 bg-white items-center">
                          <div className="md:col-span-4"><input type="text" placeholder="مثال : د. محمد سحمان" value={a.name} onChange={e=>setAttendees(attendees.map(x=>x.id===a.id?{...x,name:e.target.value}:x))} className="w-full px-3 py-2 border rounded-lg text-sm font-bold" /></div>
                          <div className="md:col-span-4"><input type="email" placeholder="sehman200@gmail.com" value={a.email} onChange={e=>setAttendees(attendees.map(x=>x.id===a.id?{...x,email:e.target.value}:x))} className="w-full px-3 py-2 border rounded-lg text-sm" dir="ltr" /></div>
                          <div className="md:col-span-3 flex justify-center">
                            <div className="flex bg-slate-100 rounded-lg p-1 w-full max-w-[200px]">
                                <button type="button" onClick={()=>setAttendees(attendees.map(x=>x.id===a.id?{...x,status:'حاضر'}:x))} className={`flex-1 py-1 text-xs font-bold rounded ${a.status==='حاضر'?'bg-emerald-500 text-white':'text-slate-500'}`}>حاضر</button>
                                <button type="button" onClick={()=>setAttendees(attendees.map(x=>x.id===a.id?{...x,status:'غائب'}:x))} className={`flex-1 py-1 text-xs font-bold rounded ${a.status==='غائب'?'bg-rose-500 text-white':'text-slate-500'}`}>غائب</button>
                            </div>
                          </div>
                          <div className="md:col-span-1 flex justify-center"><button type="button" onClick={() => {if(attendees.length>1) setAttendees(attendees.filter(x=>x.id!==a.id))}} className="p-2 text-rose-500"><Trash2 className="w-4 h-4"/></button></div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-bold block mb-2">جدول الأعمال والقرارات المتخذة</label>
                    <textarea rows="6" placeholder="اكتب تفاصيل ما دار في الاجتماع..." className="w-full p-4 border rounded-xl outline-none"></textarea>
                  </div>
                </div>
              </form>
            </div>
          );
        }

        // ---------------------------------------------------------
        // شاشة السجل
        // ---------------------------------------------------------
        function MahdarLog({ onViewChange }) {
          const [records, setRecords] = useState([
            { id: 'MHD-2026-0041', title: 'اجتماع مناقشة ميزانية الربع الثاني', date: '2026-03-08', status: 'معتمد', color: 'emerald' },
            { id: 'MHD-2026-0040', title: 'محضر تسليم مشروع البنية التحتية', date: '2026-03-05', status: 'قيد المراجعة', color: 'amber' }
          ]);
          const [confirmDialog, setConfirmDialog] = useState({ show: false, id: null, isAll: false });

          return (
            <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm">
              <button onClick={() => onViewChange('home')} className="flex items-center gap-2 text-slate-500 font-bold mb-6 text-sm"><ChevronRight className="w-4 h-4"/> العودة للرئيسية</button>
              
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">سجل المحاضر <span className="text-sm bg-slate-100 px-3 py-1 rounded-full">{records.length}</span></h2>
                <button onClick={() => setConfirmDialog({ show: true, id: null, isAll: true })} disabled={records.length === 0} className="bg-rose-50 text-rose-600 px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2"><Trash2 className="w-4 h-4"/> حذف الجميع</button>
              </div>

              {confirmDialog.show && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
                  <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center">
                    <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-600 mb-4 mx-auto"><AlertCircle className="w-6 h-6" /></div>
                    <h3 className="text-xl font-bold mb-2">تأكيد الحذف</h3>
                    <p className="text-slate-500 text-sm mb-6">هل أنت متأكد من رغبتك في الحذف؟ لا يمكن التراجع.</p>
                    <div className="flex gap-3">
                      <button onClick={() => setConfirmDialog({ show: false, id: null, isAll: false })} className="flex-1 px-4 py-2 border rounded-xl font-bold">إلغاء</button>
                      <button onClick={() => { confirmDialog.isAll ? setRecords([]) : setRecords(records.filter(r => r.id !== confirmDialog.id)); setConfirmDialog({ show: false, id: null, isAll: false }); }} className="flex-1 px-4 py-2 bg-rose-600 text-white rounded-xl font-bold">تأكيد</button>
                    </div>
                  </div>
                </div>
              )}

              {records.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {records.map(r => (
                    <div key={r.id} className="border p-4 rounded-xl flex justify-between items-center">
                      <div>
                        <div className="flex gap-3 items-center mb-1">
                          <span className="font-mono text-sm text-slate-400 bg-slate-50 px-2 rounded">{r.id}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full bg-${r.color}-50 text-${r.color}-700 border border-${r.color}-200`}>{r.status}</span>
                        </div>
                        <h3 className="font-bold text-lg">{r.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <button className="bg-emerald-50 text-emerald-700 px-3 py-2 rounded-lg font-bold text-sm">التفاصيل</button>
                        <button onClick={() => setConfirmDialog({ show: true, id: r.id, isAll: false })} className="text-slate-400 hover:text-rose-600 bg-slate-50 px-3 py-2 rounded-lg"><Trash2 className="w-4 h-4"/></button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16"><p className="text-slate-500 font-bold">لا توجد محاضر حالياً</p></div>
              )}
            </div>
          );
        }

        // ---------------------------------------------------------
        // تشغيل التطبيق (Mounting)
        // ---------------------------------------------------------
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);
    </script>
</body>
</html>

