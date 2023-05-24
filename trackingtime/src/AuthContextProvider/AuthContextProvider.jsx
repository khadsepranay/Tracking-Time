
    setIntegrationData(newData);
  }, [searchValue]);

  return (
    <AuthContext.Provider value={{ state, dispatch, Search, integrationData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
