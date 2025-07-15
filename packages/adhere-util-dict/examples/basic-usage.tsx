import React from 'react';
import Dict, { useDict, genModuleDict } from '@baifendian/adhere-util-dict';

// Example 1: Basic Dictionary Usage
const BasicExample = () => {
  // Define dictionary handlers
  Dict.handlers.SystemUser = () => [
    { label: 'Administrator', value: 'admin' },
    { label: 'Regular User', value: 'user' },
    { label: 'Guest User', value: 'guest' }
  ];

  Dict.handlers.SystemStatus = () => [
    { label: 'Active', value: 'active' },
    { label: 'Inactive', value: 'inactive' },
    { label: 'Pending', value: 'pending' }
  ];

  // Initialize the dictionary system
  Dict.init();

  // Access dictionary values
  const users = Dict.value.SystemUser.value;
  const statuses = Dict.value.SystemStatus.value;

  return (
    <div>
      <h3>Basic Dictionary Usage</h3>
      <div>
        <h4>Users:</h4>
        <ul>
          {users?.map(user => (
            <li key={user.value}>{user.label} ({user.value})</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Statuses:</h4>
        <ul>
          {statuses?.map(status => (
            <li key={status.value}>{status.label} ({status.value})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Example 2: React Component Usage
const ReactComponentExample = () => {
  // Define async dictionary
  Dict.handlers.AsyncUserData = () => 
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => users.slice(0, 5).map(user => ({
        label: user.name,
        value: user.id
      })));

  return (
    <div>
      <h3>React Component Usage</h3>
      <Dict.React.AsyncUserData
        firstLoading={<div>Loading users...</div>}
        renderNormalLoading={({ children, loading }) => 
          loading ? <div>Refreshing...</div> : children
        }
      >
        {({ data, isPending, isValidate }) => {
          if (isPending) return <div>Loading...</div>;
          if (!isValidate) return <div>Error loading data</div>;
          
          return (
            <select>
              <option value="">Select a user</option>
              {data?.map(user => (
                <option key={user.value} value={user.value}>
                  {user.label}
                </option>
              ))}
            </select>
          );
        }}
      </Dict.React.AsyncUserData>
    </div>
  );
};

// Example 3: Hook Usage
const HookExample = () => {
  const { data, isPending, isValidate, refresh } = useDict('SystemUser');

  return (
    <div>
      <h3>Hook Usage</h3>
      <button onClick={refresh} disabled={isPending}>
        {isPending ? 'Refreshing...' : 'Refresh'}
      </button>
      
      {isPending && <div>Loading...</div>}
      {!isValidate && <div>Error loading data</div>}
      
      {data && (
        <ul>
          {data.map(user => (
            <li key={user.value}>{user.label}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Example 4: Function-based Dictionary with Arguments
const FunctionBasedExample = () => {
  // Define function-based dictionary
  Dict.handlers.UserPermissions = (userId: string) => {
    // Simulate API call
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { label: 'Read', value: 'read' },
          { label: 'Write', value: 'write' },
          { label: 'Delete', value: 'delete' }
        ]);
      }, 1000);
    });
  };

  return (
    <div>
      <h3>Function-based Dictionary</h3>
      <Dict.React.UserPermissions args={['user123']}>
        {({ data, isPending }) => {
          if (isPending) return <div>Loading permissions...</div>;
          
          return (
            <div>
              <h4>Permissions for user123:</h4>
              <ul>
                {data?.map(permission => (
                  <li key={permission.value}>{permission.label}</li>
                ))}
              </ul>
            </div>
          );
        }}
      </Dict.React.UserPermissions>
    </div>
  );
};

// Example 5: Module Dictionaries
const ModuleExample = () => {
  const userModule = genModuleDict({
    roles: {
      isStatic: true,
      handler: () => [
        { label: 'Admin', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Moderator', value: 'moderator' }
      ]
    },
    permissions: {
      handler: ({ names, values }) => {
        // Access other dictionaries in the module
        const roles = values.roles?.value;
        return Promise.resolve([
          { label: 'Manage Users', value: 'manage_users' },
          { label: 'View Reports', value: 'view_reports' },
          { label: 'Edit Content', value: 'edit_content' }
        ]);
      }
    }
  });

  return (
    <div>
      <h3>Module Dictionaries</h3>
      <div>
        <h4>Roles:</h4>
        <ul>
          {userModule.values.roles?.value?.map(role => (
            <li key={role.value}>{role.label}</li>
          ))}
        </ul>
      </div>
      
      <Dict.React[userModule.names.permissions!]>
        {({ data, isPending }) => {
          if (isPending) return <div>Loading permissions...</div>;
          
          return (
            <div>
              <h4>Permissions:</h4>
              <ul>
                {data?.map(permission => (
                  <li key={permission.value}>{permission.label}</li>
                ))}
              </ul>
            </div>
          );
        }}
      </Dict.React[userModule.names.permissions!]>
    </div>
  );
};

// Example 6: Memoization and Performance
const PerformanceExample = () => {
  // Expensive calculation with memoization
  Dict.handlers.ExpensiveCalculation = (param1: number, param2: string) => {
    console.log('Performing expensive calculation...');
    // Simulate expensive operation
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          result: param1 * 2,
          description: param2,
          timestamp: Date.now()
        });
      }, 2000);
    });
  };
  Dict.handlers.ExpensiveCalculation.isUseMemo = true;

  return (
    <div>
      <h3>Performance Optimization with Memoization</h3>
      <p>This example demonstrates memoization. The calculation will only run once for each unique combination of parameters.</p>
      
      <Dict.React.ExpensiveCalculation args={[10, 'test1']}>
        {({ data, isPending }) => {
          if (isPending) return <div>Calculating...</div>;
          
          return (
            <div>
              <h4>Result:</h4>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
          );
        }}
      </Dict.React.ExpensiveCalculation>
    </div>
  );
};

// Example 7: Error Handling
const ErrorHandlingExample = () => {
  // Dictionary that might fail
  Dict.handlers.FailingDictionary = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          reject(new Error('Random failure'));
        } else {
          resolve([
            { label: 'Success Item 1', value: 'item1' },
            { label: 'Success Item 2', value: 'item2' }
          ]);
        }
      }, 1000);
    });
  };

  return (
    <div>
      <h3>Error Handling</h3>
      <Dict.React.FailingDictionary>
        {({ data, isPending, isValidate }) => {
          if (isPending) return <div>Loading...</div>;
          if (!isValidate) return <div>Error: {data?.message}</div>;
          
          return (
            <ul>
              {data?.map(item => (
                <li key={item.value}>{item.label}</li>
              ))}
            </ul>
          );
        }}
      </Dict.React.FailingDictionary>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Adhere Dictionary Utility Examples</h1>
      
      <BasicExample />
      <hr />
      
      <ReactComponentExample />
      <hr />
      
      <HookExample />
      <hr />
      
      <FunctionBasedExample />
      <hr />
      
      <ModuleExample />
      <hr />
      
      <PerformanceExample />
      <hr />
      
      <ErrorHandlingExample />
    </div>
  );
};

export default App; 