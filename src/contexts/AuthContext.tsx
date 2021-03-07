import React, { createContext, useCallback, useState, useContext } from 'react';


interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: any;
  signIn(credentials: SignInCredentials): Promise<any>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('Gempe:user');
    
    if (user) {
      return {user: JSON.parse(user)};
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
    if (email && password) {
      const user = {email, password}
      localStorage.setItem('Gempe:user', JSON.stringify(user));
      setData({user});
    } else {
      throw new Error("This user does not exist.")
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('Gempe:user');
    setData({});
  }, []);



  return (
    <AuthContext.Provider
      value={{ user: data.user ,signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
