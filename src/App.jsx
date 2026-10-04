import { useState } from 'react'
import Todo1 from './components/todo1/Todo1'
import FoodContainer from './components/food/FoodContainer'
import './App.css'

function App() {
  // หน้าปัจจุบัน: 'menu' | 'todo1' | 'food'
  const [currentPage, setCurrentPage] = useState('menu');

  // ถ้าเลือกหน้า Todo 1
  if (currentPage === 'todo1') {
    return (
      <div style={{ padding: '20px' }}>
        <button 
          onClick={() => setCurrentPage('menu')}
          style={{
            padding: '8px 16px',
            marginBottom: '20px',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          ⬅️ กลับหน้าหลัก
        </button>
        <Todo1 />
      </div>
    );
  }

  // ถ้าเลือกหน้า 1. Menu management (FoodContainer)
  if (currentPage === 'food') {
    return (
      <div style={{ padding: '20px' }}>
        <button 
          onClick={() => setCurrentPage('menu')}
          style={{
            padding: '8px 16px',
            marginBottom: '20px',
            cursor: 'pointer',
            backgroundColor: '#6c757d',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          ⬅️ กลับหน้าหลัก
        </button>
        <FoodContainer />
      </div>
    );
  }

  // หน้าเมนูหลัก (Home / Menu)
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>เลือกลองใช้งาน App</h1>
      <p>กรุณากดเลือกหน้างานที่ต้องการเข้าใช้งาน:</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <button
          onClick={() => setCurrentPage('todo1')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          📌 ไปที่หน้า Todo 1
        </button>

        <button
          onClick={() => setCurrentPage('food')}
          style={{
            padding: '15px 30px',
            fontSize: '18px',
            cursor: 'pointer',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '8px'
          }}
        >
          🍔 1. Menu management
        </button>
      </div>
    </div>
  );
}

export default App



